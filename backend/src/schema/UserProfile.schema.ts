/* eslint-disable prettier/prettier */
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserProfileDocument = UserProfile & Document;
@Schema({ timestamps: true })
export class UserProfile extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, default: false })
  isActive: boolean;

  @Prop({ required: true })
  password: string;
  

//   @Prop({ required: false }) // true
//   adUserID: string;

//   @Prop({ required: false }) // true
//   preferences: string;

//   @Prop({ required:true,type: Types.ObjectId,ref:'UserProfile'})
//   createdBy:  Types.ObjectId;

//   @Prop({ required:true,type: Types.ObjectId,ref:'UserProfile'})
//   updatedBy:  Types.ObjectId;

//   @Prop({ type: Types.ObjectId })
//   accountId: [Types.ObjectId];

//   @Prop({ type: Types.ObjectId,ref:'Account' })
//   primary_account: Types.ObjectId;
}

export const UserProfileSchema = SchemaFactory.createForClass(UserProfile);
