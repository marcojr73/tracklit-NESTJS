import {
    BadRequestException,
    Injectable,
    NestMiddleware,
  } from "@nestjs/common"
  import { NextFunction, Request, Response } from "express"
  import { validate } from "class-validator"
import { TSignInReqBody } from "../entity/validator"
  
  @Injectable()
  export class LoginValidationMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
      const body = req.body
  
      const habitsReqBody = new TSignInReqBody()
      habitsReqBody.email = body.name
      habitsReqBody.password = body.password
  
      const validations = await validate(habitsReqBody)
  
      if (validations.length) {
        throw new BadRequestException(
          validations.reduce((acc, curr) => {
            return [...acc, ...Object.values(curr.constraints)]
          }, []),
        )
      }
  
      next()
    }
  }