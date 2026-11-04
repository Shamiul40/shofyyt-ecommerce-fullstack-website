import { configureStore } from "@reduxjs/toolkit";
import shofyReducer from "./ShofySlice"

export const store = configureStore({
  reducer: {
    shofy :shofyReducer
  },
});