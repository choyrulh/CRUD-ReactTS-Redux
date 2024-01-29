import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialState, User } from "../../type/user";
import axios from "axios";

const intialState: InitialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios.get("http://localhost:5000/users").then((res) => res.data);
});

const userSlice = createSlice({
  name: "user",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default userSlice.reducer;
