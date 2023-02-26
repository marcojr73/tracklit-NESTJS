import { IsArray, IsString } from "class-validator"

class TpostHabitsReqBody {
  @IsString()
  name: string
  
  @IsArray()
  days: number[]
}
export {
    TpostHabitsReqBody
}