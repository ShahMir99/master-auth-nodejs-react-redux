//globals imports
import mongoose from "mongoose";

//local imports
import { SuccessResponse, ErrorResponse } from "../utils/responseHandler.js";
import { User } from "../models/index.js";
import logger from "../utils/logger.js";



export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId
  try {
    if (!id) {
      return ErrorResponse(res, 400, "User id is not present!");
    }

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      return ErrorResponse(res, 400, "User id is not Valid!");
    }

    if (id === userId) {
      return ErrorResponse(res, 400, "You can not delete your account");
    }

    const user = await User.findOne({ 
      _id: id ,
      isDeleted : false
    });

    if (!user) {
      return ErrorResponse(res, 400, "User not found!");
    }

    user.isDeleted = true;
    await user.save();

    return SuccessResponse(res, 200, "User deleted successfully");
  } catch (error) {
    logger.error(error);
    return ErrorResponse(res, 500, "deleteUser : Internal server error");
  }
};

export const undoDeleteUser = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId
  try {
    if (!id) {
      return ErrorResponse(res, 400, "User id is not present!");
    }

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      return ErrorResponse(res, 400, "User id is not Valid!");
    }

    if (id === userId) {
      return ErrorResponse(res, 400, "You can not undo you deleted account");
    }

    const user = await User.findOne({ 
      _id: id,
      isDeleted : true
     });

    if (!user) {
      return ErrorResponse(res, 400, "User id is not Valid!");
    }

    user.isDeleted = false;
    await user.save();

    return SuccessResponse(res, 200, "Delete undo user successfully");
  } catch (error) {
    logger.error(error);
    return ErrorResponse(res, 500, "undoDeleteUser : Internal server error");
  }
};

export const deleteUserPermanent = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId

  try {
    if (!id) {
      return ErrorResponse(res, 400, "User id is not present!");
    }

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      return ErrorResponse(res, 400, "User id is not Valid!");
    }

    if (id === userId) {
      return ErrorResponse(res, 400, "You can not delete your own account");
    }

    const user = await User.findByIdAndDelete({ _id: id });

    if (!user) {
      return ErrorResponse(res, 400, "User not found.");
    }

    return SuccessResponse(res, 200, "User Permanently deleted successfully");
  } catch (error) {
    logger.error(error);
    return ErrorResponse(res, 500, "deleteUserPermanent : Internal server error");
  }
};

export const toggleblockUserAccount = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId

  try {
    if (!id) {
      return ErrorResponse(res, 400, "User id is not present!");
    }

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      return ErrorResponse(res, 400, "User id is not Valid!");
    }

    if (id === userId) {
      return ErrorResponse(res, 400, "You can not block or unblock yourself");
    }

    const user = await User.findById({ _id: id });
    if (!user) {
      return ErrorResponse(res, 400, "User not found!");
    }

    

    user.isBlocked = !user.isBlocked;
    await user.save();

    return SuccessResponse(res, 200, `${user.isBlocked ? "Account blocked successfully" : "Account unblocked successfully"}`, user);
  } catch (error) {
    logger.error(error);
    return ErrorResponse(res, 500, "blockUserAccount : Internal server error");
  }
};

export const blockOtherUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return ErrorResponse(res, 400, "User id is not present!");
    }

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      return ErrorResponse(res, 400, "User id is not Valid!");
    }

    const user = await User.findById({ _id: id });
    if (!user) {
      return ErrorResponse(res, 400, "User not found!");
    }

    user.isBlocked = !user.isBlocked;
    await user.save();

    return SuccessResponse(res, 200, `${user.isBlocked ? "Account blocked successfully" : "Account unblocked successfully"}`, user);
  } catch (error) {
    logger.error(error);
    return ErrorResponse(res, 500, "blockUserAccount : Internal server error");
  }
};
