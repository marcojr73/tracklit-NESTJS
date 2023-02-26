import { Injectable } from "@nestjs/common"
import { TcreateHabit } from "src/models"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class HabitsRepository {
  constructor(private readonly prisma: PrismaService) { }

  findById(id: number) {
    return this.prisma.habit.findUnique({ where: { id } })
  }

  create(data: TcreateHabit) {
    return this.prisma.habit.create({ data })
  }

  deleteUnique(id: number) {
    return this.prisma.habit.delete({
      where: { id }
    })
  }

  findByUserId(userId: number, id: number) {
    return this.prisma.habit.findFirst({
      where: { userId, id }
    })
  }

  findHabitsByUser(userId: number) {
    return this.prisma.habit.findMany({
      where: {
        userId
      },
      select: {
        id: true,
        name: true,
        habitPerDay: {
          select: {
            day: true
          }
        }
      }
    })
  }
}