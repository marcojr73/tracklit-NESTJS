import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import * as dayjs from "dayjs"
import { ArrDays } from "src/models"
import { HabitsDto } from "./dtos/postHabitDto"
import { HabitPerDayRepository } from "./repositories/habitPerDayRepository"
import { HabitsRepository } from "./repositories/habitsRepository"

@Injectable()
export class HabitsService {
    constructor(
        private readonly habitsRepository: HabitsRepository,
        private readonly habitPerDayRepository: HabitPerDayRepository,
    ) { }

    async createHabit(habit: HabitsDto, userId: number) {
        for (const day of habit.days) {
            if (!ArrDays.includes(day)) {
                throw new HttpException("Invalid index day", HttpStatus.UNPROCESSABLE_ENTITY)
            }
        }
        const habitCreated = await this.habitsRepository.create({ name: habit.name, userId })
        for (const day of habit.days) {
            await this.habitPerDayRepository.create({ day: +day, habitId: habitCreated.id, userId })
        }
        return habitCreated
    }

    async getAllHabits(userId: number) {
        return await this.habitsRepository.findHabitsByUser(userId)
    }

    async deleteHabit(userId: number, id) {
        const isUserHabit = await this.habitsRepository.findByUserId(userId, id)
        if (!isUserHabit) throw new HttpException("Habit not found", HttpStatus.NOT_FOUND)
        await this.habitPerDayRepository.deleteMany(id)
        return await this.habitsRepository.deleteUnique(id)
    }

    async checkHabit(userId: number, id: number) {
        const isUserHabit = await this.habitsRepository.findByUserId(userId, id)
        if (!isUserHabit) throw new HttpException("Habit not found", HttpStatus.NOT_FOUND)
        const dayOfWeek = dayjs().day()
        await this.habitPerDayRepository.checkHabit(dayOfWeek, isUserHabit.id)
    }

    async unCheckHabit(userId: number, id: number) {
        const isUserHabit = await this.habitsRepository.findByUserId(userId, id)
        if (!isUserHabit) throw new HttpException("Habit not found", HttpStatus.NOT_FOUND)
        const dayOfWeek = dayjs().day()
        await this.habitPerDayRepository.unCheckHabit(dayOfWeek, isUserHabit.id)
    }
}
