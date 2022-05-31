import axios from "axios";
import jwtDecode from "jwt-decode";
import { UserInfo, UserLogin } from "../../../types/types";
import { loginActionCreator } from "../../features/userSlice";
import { AppDispatch } from "../../store/store";

export const loginUserThunk =
  (loginInformation: UserLogin) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}users/login`;
    const {
      data: { token },
    } = await axios.post(url, loginInformation);

    localStorage.setItem("token", token);

    const userInfo: UserInfo = jwtDecode(token);

    dispatch(loginActionCreator(userInfo));
  };
