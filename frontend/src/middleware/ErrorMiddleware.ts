import { clearError } from "@/store/slices/authSlice";
import { Middleware } from "@reduxjs/toolkit";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "react-toastify"; // Adjust the path to your slice

export const ErrorMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action.type === "auth/checkAuth/rejected") {
      console.error("Check Auth failed, but no toast shown:", action.payload);
      return next(action);
    }

    const { payload } = action;

    toast.error(payload, {
      onClose: () => {
        storeAPI.dispatch(clearError());
      },
    });
  }

  return next(action);
};
