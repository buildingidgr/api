import mongoose, { Document, Schema } from 'mongoose';

export interface IProfileExternalAccount extends Document {
  profileId: string;
  provider: string | null;
  providerId: string;
  email: string;
}

const ProfileExternalAccountSchema: Schema = new Schema({
  profileId: { type: String, required: true },
  provider: { type: String },
  providerId: { type: String, required: true },
  email: { type: String, required: true },
});

export const ProfileExternalAccount = mongoose.model<IProfileExternalAccount>('ProfileExternalAccount', ProfileExternalAccountSchema);

