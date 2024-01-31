import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import createdNewUserSliceReducer from "./features/createUserSlice";
import modalReducer from "./Modal/modalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    createdUser: createdNewUserSliceReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
