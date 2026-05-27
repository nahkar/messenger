import mongoose, { Schema, type Document } from 'mongoose';

export interface User extends Document {
	clerkId: string;
	name: string;
	email: string;
	avatar?: string;
	createdAt: Date;
	updateAt: Date;
}

const UserSchema: Schema = new Schema(
	{
		clerkId: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},
		avatar: {
			type: String,
			default: '',
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updateAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model<User>('User', UserSchema);
