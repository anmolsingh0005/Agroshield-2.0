import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserProfileService } from './UserProfile.service';
import { CreateUserProfileDto } from '../dto/UserProfile.dto';

@Controller('users')
export class UserProfileController {
    constructor(private readonly userService: UserProfileService) {}

    @Post('signup')
    async signUp(@Body() createUserDto: CreateUserProfileDto) {
        await this.userService.createUser(createUserDto);
        return 'User created successfully';
    }

    @Post('signin')
    async signIn(@Body() signInUserDto: CreateUserProfileDto) {
        const token = await this.userService.signInUser(signInUserDto);
        return { token };
    }

    @Get()
    async getAllUsers() {
        const users = await this.userService.getAllUsers();
        return users;
    }
}