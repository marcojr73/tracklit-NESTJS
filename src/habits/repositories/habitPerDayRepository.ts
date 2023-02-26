import { Injectable } from "@nestjs/common"
import { TcreateHabitPerDay } from "src/models"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class HabitPerDayRepository {
  constructor(private readonly prisma: PrismaService) { }

  findById(id: number) {
    return this.prisma.habitPerDay.findUnique({ where: { id } })
  }

  deleteMany(habitId: number) {
    return this.prisma.habitPerDay.deleteMany({
      where: { habitId }
    })
  }

  checkHabit(day: number, habitId: number){
    return this.prisma.habitPerDay.updateMany({
      where: { day, habitId },
      data: {
        done: true
      }
    })
  }

  unCheckHabit(day: number, habitId: number){
    return this.prisma.habitPerDay.updateMany({
      where: { day, habitId },
      data: {
        done: false
      }
    })
  }

  create(data: TcreateHabitPerDay) {
    return this.prisma.habitPerDay.create({ data })
  }
}