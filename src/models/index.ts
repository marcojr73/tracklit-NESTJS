import { Request } from "express"
import { Tuser } from "../auth/entity/userEntity"

interface TauthRequest extends Request {
    user: Tuser
}

interface TuserJwt {
    sub: number;
    email: string;
    name: string;
    iat?: number;
    exp?: number;
}

interface Ttoken {
    accessToken: string
}

class UserFromJwt {
    id: number
    email: string
    name: string
}

type TcreateHabit = {
    name: string,
    userId: number
}

type TcreateHabitPerDay = {
    day: number,
    habitId: number,
    userId: number
}

const ArrDays = [0,1,2,3,4,5,6]

export {
    TauthRequest,
    TuserJwt,
    Ttoken,
    UserFromJwt,
    TcreateHabit,
    TcreateHabitPerDay,
    ArrDays
}