import { Tuser } from "../entity/userEntity"
import {
	IsEmail,
	IsString,
	Matches,
	MinLength,
} from "class-validator"

export class SignUpDto extends Tuser {
	@IsEmail()
	email: string

	@IsString()
	name: string

	@IsString()
	@MinLength(4)
	@Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
		message: "Pasword must have uppercase, lowercase and numbers passwords",
	})
	password: string

	@IsString()
	image: string

}