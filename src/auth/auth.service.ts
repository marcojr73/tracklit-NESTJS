import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import * as bcrypt from "bcrypt"
import { TuserJwt, Ttoken } from "src/models"
import { SignInDto } from "./dtos/signInDto"
import { SignUpDto } from "./dtos/signUpDto"
import { Tuser } from "./entity/userEntity"
import { UserRepository } from "./repository/users.repository"

@Injectable()
export class AuthService {

    constructor(
        private readonly UserRepository: UserRepository,
        private readonly JwtService: JwtService 
    ) { }

    async createNewUser(user: SignUpDto) {
        const isUser = await this.UserRepository.findByEmail(user.email)
        if (isUser) throw new HttpException("Email already register", HttpStatus.UNPROCESSABLE_ENTITY)
        user.password = bcrypt.hashSync(user.password, 10)
        user = await this.UserRepository.create(user)
        return {
            ...user, password: undefined, id: undefined
        }
    }

    async validateUser(email: string, password: string) {
        const isUser = await this.UserRepository.findByEmail(email)
        if(isUser){
            const isPasswordValid = bcrypt.compareSync(password, isUser.password)
            if(isPasswordValid) {
                return isUser
            }
        }
        throw new HttpException("Password or email is invalid", HttpStatus.CONFLICT)
    }

    async login(SignInDto: SignInDto): Promise<Ttoken> {
        const user = await this.UserRepository.findByEmail(SignInDto.email)
        const userJwt: TuserJwt = {
            sub: user.id,
            email: user.email,
            name: user.name,
        }
        const jwtToken = this.JwtService.sign(userJwt)
        return {
            accessToken: jwtToken
        }

    }
}