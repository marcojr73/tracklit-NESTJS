import { Body, Controller, HttpCode, HttpStatus, Post, Request, Res, UseGuards } from "@nestjs/common"
import { SignUpDto } from "./dtos/signUpDto"
import { AuthService } from "./auth.service"
import { LocalAuthGuard } from "./guards/localAuth.guard"
import { SignInDto } from "./dtos/signInDto"
import { IsPublic } from "src/decorators/isPublicDecorator"

@IsPublic()
@Controller("auth")
export class UsersController {

  constructor(private readonly authService: AuthService) {}

  @Post("sign-up")
  signUp(@Body() signUpDto: SignUpDto){
    return this.authService.createNewUser(signUpDto)
  }

  @Post("sign-in")
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  signIn(@Body() signInDto: SignInDto){
    return this.authService.login(signInDto)
  }
}
