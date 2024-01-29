import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import createdNewUserSliceReducer from "./features/createUserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    createdUser: createdNewUserSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
