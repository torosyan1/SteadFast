import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

const UserSchema = new Schema({
    first_name: String,
    last_name : String,
    email     : String,
    password  : String,
});

UserSchema.pre('save', async function (next) {
    try {
        if (this.isNew) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(this.password, salt);
            this.password = hashedPassword;
        }
        next();
    } catch (error) {
        next(error);
    }
});

export const User = mongoose.model('User', UserSchema);
///Vahaggg
