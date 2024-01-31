import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UpdateUserRequest, User } from "../../type/user";
import axios from "axios";

export const updateUser = createAsyncThunk<User, UpdateUserRequest>(
  "users/updateUser",
  async ({ userId, updateUserData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/users/${userId}`,
        updateUserData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const updateSlice = createSlice({
  name: "updateUser",
  initialState: [] as User[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUser.fulfilled, (state, action) => {
      const updateUser = action.payload;
      const index = state.findIndex((user) => user.id === updateUser.id);
      if (index !== -1) {
        state[index] = updateUser;
      }
    });
  },
});

export default updateSlice.reducer;
