import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./Slices/CategorySlice.ts";
import loadingReducer from "./Slices/LoadingSlice.ts";

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        loading: loadingReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;