import { LOGIN_USER } from "../constants/action-types";
import { LOGOUT_USER } from "../constants/action-types";

export const loginUser = user => ({ type: LOGIN_USER, payload: user });
export const logoutUser = user => ({ type: LOGOUT_USER, payload: user });
