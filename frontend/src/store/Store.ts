import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice"
import { ErrorMiddleware } from "@/middleware/ErrorMiddleware"
import { SuccessMiddleware } from "@/middleware/SuccessMiddleware"

export const store = configureStore({
    reducer : {
        authSlice
    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(ErrorMiddleware, SuccessMiddleware),
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch