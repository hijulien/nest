import { IsEmail,MaxLength,MinLength,IsInt,Length,Max,Min,Matches } from "class-validator";

export class CreateUserDto {
    @Length(2,64)
    name: string;

    @IsEmail()
    email: string;

    // @MinLength(8)
    // @MaxLength(64)
    @Matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,64}$/g,{
        message:"8~64位字母数字组合"
    })
    password: string;

    @IsInt()
    @Min(16)
    @Max(128)
    age: number;
}