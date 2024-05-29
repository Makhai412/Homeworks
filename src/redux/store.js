import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/auth/AuthSlice"

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})

export default store;