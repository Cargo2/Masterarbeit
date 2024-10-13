import { model, Schema } from 'mongoose';

export interface User {
    id: string;
    email: string;
    name: string;
    password: string;
    address: string;
    isAdmin: boolean;
    isConsultant: boolean;
    rating: number;
}

export const UserSchema = new Schema<User>({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
    isAdmin: {type: Boolean, required: true},
    isConsultant: {type: Boolean, required: true},
    rating: {type: Number, required: false}
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
});

export const UserModel = model<User>('User', UserSchema);
