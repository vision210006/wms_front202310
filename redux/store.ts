import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import noticeSlice from "./noticeSlice";
import stockSlice from "./stockSlice";
import estimateSlice from "./estimateSlice";
import storeSlice from "./storeSlice";

export const store = configureStore({
  reducer: {user:userSlice.reducer, notice:noticeSlice.reducer, stock:stockSlice.reducer, estimate:estimateSlice.reducer, store:storeSlice.reducer},
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;