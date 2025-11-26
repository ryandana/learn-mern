import mongoose from "mongoose";
import validator from 'validator';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 20
    },
    nickname: {
        type: String,
        required: [true, "Nickname is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: validator.isEmail,
            message: "Invalid email address"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        validator: {
            validator: validator.isStrongPassword,
            message: "Password is not strong enough"
        }
    },
    avatar: {
        type: String,
        default: null
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;