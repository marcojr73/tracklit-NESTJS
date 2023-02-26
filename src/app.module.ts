import { Module } from "@nestjs/common"
import { AuthModule } from "./auth/auth.module"
import { HabitsModule } from "./habits/habits.module"

@Module({
  imports: [
    AuthModule,
    HabitsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
