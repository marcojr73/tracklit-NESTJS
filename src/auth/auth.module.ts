import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt"
import { PrismaModule } from "src/prisma/prisma.module"
import { UsersController } from "./auth.controller"
import { AuthService } from "./auth.service"
import { LoginValidationMiddleware } from "./middlewares"
import { UserRepository } from "./repository/users.repository"
import { LocalStrategy } from "./strategies/localStrategy"

@Module({
  imports: [PrismaModule, JwtModule.register({ secret: process.env.KEYJWT, signOptions: { expiresIn: "7d" } })],
  controllers: [UsersController],
  providers: [AuthService, UserRepository, LocalStrategy]
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes("auth/sign-in")
  }
}
