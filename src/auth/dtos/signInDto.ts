import {
	IsEmail,
	IsString,
	Matches,
	MinLength,
} from "class-validator"

export class SignInDto {
	@IsEmail()
	email: string

	@IsString()
	@MinLength(4)
	@Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
		message: "Pasword must have uppercase, lowercase and numbers passwords",
	})
	password: string
}