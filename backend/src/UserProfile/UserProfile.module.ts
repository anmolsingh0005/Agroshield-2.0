import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserProfileController } from './UserProfile.controller';
import { UserProfileService } from './UserProfile.service';
import { UserProfile, UserProfileSchema } from '../schema/UserProfile.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: UserProfile.name, schema: UserProfileSchema },
        ]),
    ],
    controllers: [UserProfileController],
    providers: [UserProfileService],
})
export class UserProfileModule {}