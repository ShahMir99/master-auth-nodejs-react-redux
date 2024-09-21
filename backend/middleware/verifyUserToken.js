import jwt from "jsonwebtoken";
import logger from "../utils/logger.js";
import { ErrorResponse } from "../utils/responseHandler.js";
import { Config } from "../configs/index.js";

export const verifyUserToken = (req, res, next) => {
  const token = req.cookies.token;

  try {
    if (!token) {
      return ErrorResponse(res, 401, "Unauthorized - Invalid token");
    }

    const decodeToken = jwt.verify(token, Config.jwtSecret);

    if (!decodeToken) {
      return ErrorResponse(res, 401, "Unauthorized - Invalid token");
    }

    req.userId = decodeToken.userId;
    req.userRole = decodeToken.userRole;

    next();
  } catch (error) {
    logger.error(error);
    return ErrorResponse(res, 500, "Internal Server Error");
  }
};
