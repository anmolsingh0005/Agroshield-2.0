import { Injectable } from '@nestjs/common';
import { CreateUserProfileDto } from '../dto/UserProfile.dto';

@Injectable()
export class UserProfileService {
    async createUser(createUserDto: CreateUserProfileDto): Promise<void> {
        // Logic to create a user
    }

    async signInUser(signInUserDto: CreateUserProfileDto): Promise<string> {
        // Logic to sign in a user and generate a token
        const token = 'example_token';
        return token;
    }

    async getAllUsers(): Promise<any[]> {
        // Logic to get all users
        const users= [];
        return users;
    }
}