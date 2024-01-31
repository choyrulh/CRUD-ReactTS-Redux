import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface DeleteUserRequest {
  userId: number;
}

export const deleteUser = createAsyncThunk<void, DeleteUserRequest>(
  "users/deleteUser",
  async ({ userId }, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const deleteUserSlice = createSlice({
  name: "deleteUser",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default deleteUserSlice.reducer;
