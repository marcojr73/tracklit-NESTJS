import { createParamDecorator, ExecutionContext } from "@nestjs/common"
import { Tuser } from "src/auth/entity/userEntity"
import { TauthRequest } from "src/models"

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): Tuser => {
    const request = context.switchToHttp().getRequest<TauthRequest>()

    return request.user
  },
)