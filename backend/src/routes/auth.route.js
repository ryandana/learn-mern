import express from "express";
import { checkController, loginController, logoutController, registerController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.post("/logout", authMiddleware, logoutController);

router.get("/me", authMiddleware, checkController);



export default router;