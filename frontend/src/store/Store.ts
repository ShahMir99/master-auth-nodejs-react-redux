import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./slices/auth/authSlice"
import recoverySlice from "./slices/auth/recoverySlice"
import { ErrorMiddleware } from "@/middleware/ErrorMiddleware"
import { SuccessMiddleware } from "@/middleware/SuccessMiddleware"

export const store = configureStore({
    reducer : {
        authSlice,
        recoverySlice
    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(ErrorMiddleware, SuccessMiddleware),
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch