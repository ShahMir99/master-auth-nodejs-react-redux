import Axios from "@/configs/ApiConfig";
import { ResetPasswordFormType } from "@/Pages/ForgotPassword";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type RecoveryPagesSliceType = {
  isPassowrdForgot: boolean;
  isEmailSent: boolean;
  isLoading: boolean;
  secureKey: string | null;
  error: string | null;
};

const initialState: RecoveryPagesSliceType = {
  isPassowrdForgot: false,
  secureKey: "",
  isLoading: false,
  isEmailSent: false,
  error: null,
};

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email: string, { rejectWithValue }) => {
    try {
      const { data } = await Axios.post("/api/v1/auth/forgot-password", {
        email,
      });
      return data;
    } catch (error: any) {
      console.error(
        "🚀 ~ Getting Error in Checking forgot password ~ error:",
        error
      );
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (formData: ResetPasswordFormType, { rejectWithValue }) => {
    try {
      const { data } = await Axios.patch(
        `/api/v1/auth/reset-password/${formData.otp}`,
        formData
      );
      return data;
    } catch (error: any) {
      console.error(
        "🚀 ~ Getting Error in Checking forgot password ~ error:",
        error
      );
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);

const RecoveryPagesSlice = createSlice({
  name: "recoveryPages",
  initialState,
  reducers: {
    setforgotPassword(state, actions) {
      (state.isPassowrdForgot = true), (state.secureKey = actions.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.isEmailSent = true;
      })
      .addCase(forgotPassword.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      });

    builder
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.isPassowrdForgot = false;
        state.secureKey = "";
      })
      .addCase(resetPassword.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isPassowrdForgot = false;
        state.secureKey = "";
        state.error = payload as string;
      });
  },
});

export const { setforgotPassword } = RecoveryPagesSlice.actions;
export default RecoveryPagesSlice.reducer;
