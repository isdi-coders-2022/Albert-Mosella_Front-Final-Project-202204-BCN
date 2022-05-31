import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserInfo } from "../../types/types";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    username: "",
    logged: false,
  },
  reducers: {
    login: (user: User, action: PayloadAction<UserInfo>) => ({
      ...action.payload,
      logged: true,
    }),
    logout: () => ({
      name: "",
      username: "",
      logged: false,
    }),
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
