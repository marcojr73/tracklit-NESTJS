import {
    IsArray,
    IsNotEmpty,
    IsString
} from "class-validator"

export class HabitsDto {
    @IsString()
    name: string

    @IsNotEmpty()
    @IsArray()
    days: number[]
}