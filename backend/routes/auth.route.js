import express from "express";
import authController from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign-up", authController.signUp);
router.post("/login", authController.login);
router.post("/logout", authController.logOut);

router.post("/email-verification", authController.emailVerification);
router.post("/forgot-password", authController.forgotPassword);
router.patch("/reset-password/:token", authController.resetPassword);

export default router;
