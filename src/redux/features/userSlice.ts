import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserInfo } from "../../types/types";

const initialState: User = {
  name: "",
  username: "",
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (user: User, action: PayloadAction<UserInfo>) => ({
      ...action.payload,
      logged: true,
    }),
    logout: () => ({ name: "", username: "", logged: false }),
  },
});

export const { login: logInActionCreator, logout: logOutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
