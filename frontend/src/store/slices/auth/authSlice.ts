import { AuthFormType } from "@/components/auth/login";
import Axios from "@/configs/ApiConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface authState {
  globalLoading: boolean;
  isLoading: boolean;
  isAuthenticated: boolean;
  user: { [key: string]: any } | null;
  message: string | null;
  submitError: string | null;
}

const initialState: authState = {
  globalLoading: false,
  isLoading: false,
  isAuthenticated: false,
  user: {},
  message : null,
  submitError: null,
};


export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await Axios.get("/api/v1/auth/check-auth");
      return data;
    } catch (error: any) {
      console.error("🚀 ~ Getting Error in Check Auth thunk ~ error:", error);
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);


export const LoginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData: AuthFormType, { rejectWithValue }) => {
    try {
      const { data } = await Axios.post("/api/v1/auth/login", formData);
      return data;
    } catch (error: any) {
      console.error("🚀 ~ Getting Error in Login thunk ~ error:", error);
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const SignUpUser = createAsyncThunk(
  "auth/signupUser",
  async (formData: AuthFormType, { rejectWithValue }) => {
    try {
      const { data } = await Axios.post("/api/v1/auth/sign-up", formData);
      return data;
    } catch (error: any) {
      console.error("🚀 ~ Getting Error in sign up thunk ~ error:", error);
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  "auth/logOutUser",
  async (_, { rejectWithValue }) => {
    try {
      const {data} = await Axios.post("/api/v1/auth/logout");
      return data
    } catch (error: any) {
      console.error("🚀 ~ Getting Error in Check Auth thunk ~ error:", error);
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);


const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state){
      state.submitError = null
    },
    clearMessage(state){
      state.message = null
    }
  },
  extraReducers: (builder) => {

    // Check Login 
      builder.addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
        state.submitError = null;
        state.message = null;
      })
      .addCase(LoginUser.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = payload.payload
        state.message = payload.message
        state.submitError = null
      })
      .addCase(LoginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.message = null;
        state.isAuthenticated = false;
        state.submitError = payload as string;
      });


        // Check Auth
      builder.addCase(checkAuth.pending, (state) => {
        state.globalLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, {payload}) => {
        state.globalLoading = false;
        state.isAuthenticated = true;
        state.user = payload.payload
      })
      .addCase(checkAuth.rejected, (state) => {
        state.globalLoading = false;
        state.isAuthenticated = false;
      })


        // Check SignUp 
      builder.addCase(SignUpUser.pending, (state) => {
        state.isLoading = true;
        state.submitError = null,
        state.message = null;
      })
      .addCase(SignUpUser.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = payload.payload
        state.message = payload.message;
        state.submitError = null
      })
      .addCase(SignUpUser.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.message = null;
        state.submitError = payload as string

      })

      builder.addCase(logOutUser.pending, (state) => {
        state.isLoading = true;
        state.submitError = null,
        state.message = null;
      })
      .addCase(logOutUser.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.message = payload.message;
        state.user = null
        state.submitError = null
      })
      .addCase(logOutUser.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.message = null;
        state.submitError = payload as string

      })
  },
});

export const {clearError, clearMessage} = AuthSlice.actions
export default AuthSlice.reducer;
