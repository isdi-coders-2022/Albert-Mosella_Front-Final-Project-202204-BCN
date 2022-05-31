import axios from "axios";
import jwtDecode from "jwt-decode";
import { ResponseApi, UserInfo, UserLogin } from "../../types/types";
import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

export const loginThunk =
  (userData: UserLogin) => async (dispatch: AppDispatch) => {
    const url: string | undefined = process.env.REACT_APP_API_URL;

    try {
      const {
        data: { token },
      }: ResponseApi = await axios.post(
        `${url}users/login` as string,
        userData
      );

      if (token) {
        const { name, username }: UserInfo = jwtDecode(token);
        dispatch(loginActionCreator({ name, username }));
        localStorage.setItem("token", token);
      }
    } catch (error: any) {
      return error.message;
    }
  };
