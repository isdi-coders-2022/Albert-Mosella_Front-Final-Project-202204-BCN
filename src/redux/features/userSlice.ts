import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserInfo, UserRegister } from "../../types/types";

const initialState: User = {
  name: "",
  username: "",
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    register: (user, action: PayloadAction<UserRegister>) => ({
      ...action.payload,
      logged: false,
    }),
    login: (user: User, action: PayloadAction<UserInfo>) => ({
      ...action.payload,
      logged: true,
    }),
    logout: () => ({ name: "", username: "", logged: false }),
  },
});

export const {
  login: logInActionCreator,
  logout: logOutActionCreator,
  register: registerActionCreator,
} = userSlice.actions;

export default userSlice.reducer;
