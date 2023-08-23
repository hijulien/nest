import { IsEmail,MaxLength,MinLength,IsInt,Length,Max,Min } from "class-validator";

export class CreateUserDto {
    @Length(2,64)
    name: string;

    @IsEmail()
    email: string;

    @MinLength(8)
    @MaxLength(64)
    password: string;

    @IsInt()
    @Min(16)
    @Max(128)
    age: number;
}