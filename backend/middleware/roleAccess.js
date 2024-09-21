import { ErrorResponse } from "../utils/responseHandler.js";

export const roleAccess = (roles) => {
  return function (req, res, next) {
    const userRole = req.userRole;
    if (roles.includes(userRole)) {
      next();
    } else {
      return ErrorResponse(res, 401, "Unauthorized - Access Denied");
    }
  };
};
