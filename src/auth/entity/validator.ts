import { IsEmail, IsString } from "class-validator"

class TSignUpReqBody {
  @IsEmail()
  email: string

  @IsString()
  password: string
  
  @IsString()
  image: string

  @IsString()
  name: string
}


class TSignInReqBody {
    @IsEmail()
    email: string
  
    @IsString()
    password: string
}

export {
   TSignUpReqBody,
   TSignInReqBody 
}