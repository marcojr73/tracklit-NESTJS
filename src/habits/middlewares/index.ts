import {
    BadRequestException,
    Injectable,
    NestMiddleware,
  } from "@nestjs/common"
  import { NextFunction, Request, Response } from "express"
  import { validate } from "class-validator"
import { TpostHabitsReqBody } from "../entities/validator"
  
  @Injectable()
  export class PostHabitValidationMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
      const body = req.body
  
      const habitsReqBody = new TpostHabitsReqBody()
      habitsReqBody.name = body.name
      habitsReqBody.days = body.days
  
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