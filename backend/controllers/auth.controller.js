//globals imports
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import crypto from "crypto";

//local imports
import { SuccessResponse, ErrorResponse } from "../utils/responseHandler.js";
import { User } from "../models/index.js";
import logger from "../utils/logger.js";
import { generateToken } from "../utils/generateToken.js";
import { Config } from "../configs/index.js";
import {
  verifyEmail,
  welcomeBackEmail,
  welcomeEmail,
  forgotPasswordEmail,
  resetSuccessEmail,
} from "../nodemailer/emailService.js";

const signUp = async (req, res) => {
  const session = await mongoose.startSession();
  const { name, email, password } = req.body;
  try {
    session.startTransaction();
    if (!name) {
      return ErrorResponse(res, 400, "Name is required");
    }

    if (!email) {
      return ErrorResponse(res, 400, "Email is required");
    }

    if (!password) {
      return ErrorResponse(res, 400, "Password is required");
    }

    const isExist = await User.findOne({ email });
    if (isExist) {
      return ErrorResponse(res, 409, "User already exist");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const VerificationCode = Math.floor(1000000 + Math.random() * 9000000);

    const user = new User({
      name,
      email,
      password: hashPassword,
      emailVerificationToken: VerificationCode,
      emailVerificationTokenExpires: Date.now() + 10 * 60 * 1000,
    });

    await user.save({ session });
    generateToken(res, user);

    await verifyEmail(user.email, VerificationCode);
    await session.commitTransaction();
    session.endSession();

    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.emailVerificationToken;

    return SuccessResponse(res, 200, "User register successfully", userObject);
  } catch (error) {
    logger.error(error);
    await session.abortTransaction();
    session.endSession();
    return ErrorResponse(res, 500, error.message);
  }
};

const emailVerification = async (req, res) => {
  const { code } = req.body;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    if (!code) {
      return ErrorResponse(res, 400, "verification code is required");
    }

    const user = await User.findOne({
      emailVerificationToken: code,
      emailVerificationTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      return ErrorResponse(res, 409, "Invalid or expire token");
    }

    user.isVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationTokenExpires = undefined;

    await user.save({ session });
    await welcomeEmail(user.email, user.name);

    await session.commitTransaction();
    session.endSession();
    const userObject = user.toObject();
    delete userObject.password;

    return SuccessResponse(res, 200, "User verified successfully", userObject);
  } catch (error) {
    logger.error(error);
    await session.abortTransaction();
    session.endSession();
    return ErrorResponse(res, 500, error.message);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    if (!email) {
      return ErrorResponse(res, 400, "Email is required");
    }

    if (!password) {
      return ErrorResponse(res, 400, "Password is required");
    }

    const user = await User.findOne({ email, isDeleted: false });

    if (!user) {
      return ErrorResponse(res, 400, "Invalid credentials");
    }

    if (user.isBlocked) {
      return ErrorResponse(res, 400, "Your account has been blocked!");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return ErrorResponse(res, 400, "Invalid credentials");
    }

    const lastDate = new Date(user.lastLogin);
    const currentDate = new Date();

    const diffInMonths =
      (currentDate.getFullYear() - lastDate.getFullYear()) * 12 +
      currentDate.getMonth() -
      lastDate.getMonth();

    user.lastLogin = Date.now();
    await user.save({ session });

    generateToken(res, user);

    if (diffInMonths >= 1) {
      await welcomeBackEmail(user.email, user.name);
    }

    await session.commitTransaction();
    session.endSession();

    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.emailVerificationToken;

    return SuccessResponse(res, 200, "User logged in successfully", userObject);
  } catch (error) {
    logger.error(error);
    await session.abortTransaction();
    session.endSession();
    return ErrorResponse(res, 500, error.message);
  }
};

const logOut = async (req, res) => {
  try {
    res.clearCookie("token");
    return SuccessResponse(res, 200, "User logout Successfully");
  } catch (error) {
    logger.error(error);
    return ErrorResponse(res, 500, "Internal server error");
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    if (!email) {
      return ErrorResponse(res, 400, "Email is required");
    }

    const user = await User.findOne({ email });

    if (!user) {
      return ErrorResponse(res, 400, "User not found.");
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 10 * 60 * 1000;

    user.resetPasswordToken = resetToken;
    user.resetPasswordTokenExpires = resetTokenExpiresAt;

    await user.save({ session });

    const url = `${Config.clientUrl}/reset-password/${resetToken}`;
    await forgotPasswordEmail(user.email, url);

    await session.commitTransaction();
    session.endSession();

    return SuccessResponse(res, 200, "Reset link sent successfully");
  } catch (error) {
    logger.error(error);
    await session.abortTransaction();
    session.endSession();
    return ErrorResponse(res, 500, "Internal server error");
  }
};

const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    if (!token) {
      return ErrorResponse(res, 400, "token is required");
    }
    if (!password) {
      return ErrorResponse(res, 400, "Password is required");
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      return ErrorResponse(res, 400, "Invalid or expire token.");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    user.password = hashPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpires = undefined;

    await user.save({ session });

    await resetSuccessEmail(user.email);

    await session.commitTransaction();
    session.endSession();

    return SuccessResponse(res, 200, "Password reset successfully");
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    logger.error(error);
    return ErrorResponse(res, 500, "Password reset : Internal server error");
  }
};

const checkAuth = async (req, res) => {
  res.set("Cache-Control", "no-store");
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return ErrorResponse(res, 400, "User not found");
    }
    return SuccessResponse(res, 200, "", user);
  } catch (error) {}
};

export default {
  signUp,
  login,
  emailVerification,
  forgotPassword,
  resetPassword,
  logOut,
  checkAuth
};
