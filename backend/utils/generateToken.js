import jwt from "jsonwebtoken";

import { Config } from "../configs/index.js";

export const generateToken = (res, user) => {
  const token = jwt.sign(
    { userId: user._id, userRole: user.role },Config.jwtSecret,{
      expiresIn: "7d",
    }
  );

  res.cookie("token", token, {
    httpOnly: true, //Provent from XSS attacks
    secure: Config.nodeEnv === "production",
    sameSite: "strict", // Provent from CSRF attacls
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};
