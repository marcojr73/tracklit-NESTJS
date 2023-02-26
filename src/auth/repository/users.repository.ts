import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"
import { Tuser } from "../entity/userEntity"

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } })
  }

  create(user: Tuser) {
    return this.prisma.user.create({
      data: user
    })
  }
}