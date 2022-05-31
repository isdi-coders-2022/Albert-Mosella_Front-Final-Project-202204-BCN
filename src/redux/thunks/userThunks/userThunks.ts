import axios from "axios";
import jwtDecode from "jwt-decode";
import { UserInfo, UserLogin } from "../../../types/types";
import { logInActionCreator } from "../../features/userSlice";
import { AppDispatch } from "../../store/store";

export const userLoginThunk =
  (loginInformation: UserLogin) => async (dispatch: AppDispatch) => {
    const route: string = `${process.env.REACT_APP_API_URL}users/login`;
    const {
      data: { token },
    } = await axios.post(route, loginInformation);

    localStorage.setItem("token", token);

    const userInfo: UserInfo = jwtDecode(token);

    dispatch(logInActionCreator(userInfo));
  };
