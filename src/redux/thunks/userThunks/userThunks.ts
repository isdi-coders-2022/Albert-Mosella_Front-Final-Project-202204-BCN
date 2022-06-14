import axios from "axios";
import jwtDecode from "jwt-decode";
import { correctAction, wrongAction } from "../../../modals/modals";
import { UserInfo, UserLogin, UserRegister } from "../../../types/types";
import {
  logInActionCreator,
  registerActionCreator,
} from "../../features/userSlice";
import { AppDispatch } from "../../store/store";

export const userLoginThunk =
  (loginInformation: UserLogin) => async (dispatch: AppDispatch) => {
    try {
      const route: string = `${process.env.REACT_APP_API_URL}users/login`;
      const {
        data: { token },
      } = await axios.post(route, loginInformation);

      localStorage.setItem("token", token);

      const userInfo: UserInfo = jwtDecode(token);

      correctAction("Wellcome!");

      dispatch(logInActionCreator(userInfo));
    } catch {
      wrongAction("User or password incorrect");
    }
  };

export const userRegisterThunk =
  (formData: UserRegister) => async (dispatch: AppDispatch) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}users/register`,
        formData
      );
      dispatch(registerActionCreator(data));
      correctAction("User created!");
    } catch {
      wrongAction("User already exists!");
    }
  };
