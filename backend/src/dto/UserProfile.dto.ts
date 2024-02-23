import { IsString, IsEmail, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateUserProfileDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean;

    @IsNotEmpty()
    @IsString()
    password: string;
}