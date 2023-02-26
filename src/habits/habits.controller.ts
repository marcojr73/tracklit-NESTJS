import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common"
import { Tuser } from "src/auth/entity/userEntity"
import { CurrentUser } from "src/decorators/currentUserDecorator"
import { HabitsDto } from "./dtos/postHabitDto"
import { HabitsService } from "./habits.service"

@Controller("habits")
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  @Post()
  newHabit(@Body() habitDto: HabitsDto, @CurrentUser() user: Tuser){
    return this.habitsService.createHabit(habitDto, user.id)
  }

  @Get()
  listAllHabits(@CurrentUser() user: Tuser){
    return this.habitsService.getAllHabits(user.id)
  }

  @Delete(":id")
  deleteHabit(@CurrentUser() user: Tuser, @Param() id: {id: string}){
    return this.habitsService.deleteHabit(user.id, +id.id)
  }

  @Post(":id/check")
  checkHabit(@CurrentUser() user: Tuser, @Param() id: {id: string}){
    return this.habitsService.checkHabit(user.id, +id.id)
  }

  @Post(":id/uncheck")
  unCheckHabit(@CurrentUser() user: Tuser, @Param() id: {id: string}){
    return this.habitsService.unCheckHabit(user.id, +id.id)
  }
}
