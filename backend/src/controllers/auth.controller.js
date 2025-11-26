import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Check if user already exists`
        const exist = await User.findOne({ email });
        if (exist) {
            return res.status(400).json({ message: "User already exists" });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);
        // Create the user
        const user = await User.create({ username, nickname: username, email, password: hashedPassword });
        res.status(201).json({ user });
    } catch (error) {
        console.error(error); // Log detailed error for debugging
        res.status(500).json({ message: "An unexpected server error occurred during register." }); // Generic message for client
    }
}

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }
        const isMatching = await bcrypt.compare(password, user.password);
        if (!isMatching) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY });
        res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "none" });
        res.status(200).json({ user });
    } catch (error) {
        console.error(error); // Log detailed error for debugging
        res.status(500).json({ message: "An unexpected server error occurred during login." }); // Generic message for client
    }
}

export const logoutController = (req, res) => {
    try {
        res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "none" });
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error(error); // Log detailed error for debugging
        res.status(500).json({ message: "An unexpected server error occurred during logout." }); // Generic message for client
    }
}

export const checkController = (req, res) => {
    try {
        res.status(200).json({
            user: req.user
        });
    } catch (error) {
        console.error(error); // Log detailed error for debugging
        res.status(500).json({ message: "An unexpected server error occurred during checking." }); // Generic message for client
    }
}