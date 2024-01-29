import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CreateUserRequest, User } from "../../type/user";

export const createUser = createAsyncThunk<User, CreateUserRequest>(
  "users/createUser",
  async (requestData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/users",
        requestData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const createNewUserSlice = createSlice({
  name: "createUser",
  initialState: [] as User[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default createNewUserSlice.reducer;
