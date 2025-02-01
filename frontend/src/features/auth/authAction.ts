import {
  loginReject,
  loginReques,
  loginSuccess,
  logout,
} from "../../redux/authSlice";
import { STORAGE_KEYS } from "../../utils/enums";
import apiAuth from "./ApiAuth";

export const login = (credentials: any) => async (dispatch: any) => {
  try {
    dispatch(loginReques());
    const response = await apiAuth.loginFn(credentials);
    dispatch(loginSuccess(response));
  } catch (error: any) {
    dispatch(loginReject(error.message));
  }
};

export const logoutAdmin = () => async (dispatch: any) => {
  localStorage.removeItem(STORAGE_KEYS.TOKEN);
  dispatch(logout());
};
