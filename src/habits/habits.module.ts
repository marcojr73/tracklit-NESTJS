import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { HabitsService } from "./habits.service"
import { HabitsController } from "./habits.controller"
import { HabitsRepository } from "./repositories/habitsRepository"
import { PrismaModule } from "src/prisma/prisma.module"
import { APP_GUARD } from "@nestjs/core"
import { JwtAuthGuard } from "./guards/jwtAuthGuard"
import { JwtStrategy } from "./strategies/jwtStrategy"
import { HabitPerDayRepository } from "./repositories/habitPerDayRepository"

@Module({
  imports: [PrismaModule],
  controllers: [HabitsController],
  providers: [HabitsService, HabitsRepository, HabitPerDayRepository, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard
  }, JwtStrategy]
})

export class HabitsModule {}

