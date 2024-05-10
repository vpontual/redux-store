import AuthService from "../utils/auth";

// Action Types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";

// Action Creators
export const loginSuccess = (user) => {
  AuthService.login(user.token);
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const logoutSuccess = () => {
  AuthService.logout();
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const registerSuccess = (user) => {
  AuthService.login(user.token);
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
};

export const authError = (error) => ({
  type: AUTH_ERROR,
  payload: error,
});
