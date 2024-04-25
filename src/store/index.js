import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "./slices/userSlise";

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
