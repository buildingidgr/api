import mongoose, { Document, Schema } from 'mongoose';

export interface IProfile extends Document {
  clerkId: string;
  email: string;
  emailVerified: boolean;
  phoneNumber?: string;
  phoneVerified: boolean;
  username?: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  apiKey: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProfileSchema: Schema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  emailVerified: { type: Boolean, default: false },
  phoneNumber: { type: String },
  phoneVerified: { type: Boolean, default: false },
  username: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  avatarUrl: { type: String },
  apiKey: { type: String, required: true, unique: true },
}, { timestamps: true });

export const Profile = mongoose.model<IProfile>('Profile', ProfileSchema);

