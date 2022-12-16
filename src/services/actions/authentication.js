import {
  loginRequest,
  registerRequest,
  restorePassword,
  resetPassword,
  logoutRequest,
  fetchUserData,
  updateUserData,
} from "../../utils/api";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const FORGOT_PASS_REQUEST = "FORGOT_PASS_REQUEST";
export const FORGOT_PASS_SUCCESS = "FORGOT_PASS_SUCCESS";
export const FORGOT_PASS_FAILURE = "FORGOT_PASS_FAILURE";

export const RESET_PASS_REQUEST = "RESET_PASS_REQUEST";
export const RESET_PASS_SUCCESS = "RESET_PASS_SUCCESS";
export const RESET_PASS_FAILURE = "RESET_PASS_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const SAVE_USER_REQUEST = "SAVE_USER_REQUEST";
export const SAVE_USER_SUCCESS = "SAVE_USER_SUCCESS";
export const SAVE_USER_FAILURE = "SAVE_USER_FAILURE";

export const SET_USER = "SET_USER";
export const RESET_USER = "RESET_USER";

export const SET_RECOVERY_EMAIL = "SET_RECOVERY_EMAIL";
export const UNSET_RECOVERY_EMAIL = "UNSET_RECOVERY_EMAIL";

export const login = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return loginRequest(email, password)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: e,
      });
    });
};

export const register = (name, email, pass) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  return registerRequest(name, email, pass)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: REGISTER_FAILURE,
        payload: e,
      });
    });
};

export const forgotPass = (email) => (dispatch) => {
  dispatch({ type: FORGOT_PASS_REQUEST });
  return restorePassword(email)
    .then((res) => {
      dispatch({
        type: FORGOT_PASS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: FORGOT_PASS_FAILURE,
        payload: e,
      });
    });
};

export const resetPass = (pass, code) => (dispatch) => {
  dispatch({ type: RESET_PASS_REQUEST });
  return resetPassword(pass, code)
    .then((res) => {
      dispatch({
        type: RESET_PASS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: RESET_PASS_FAILURE,
        payload: e,
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_REQUEST,
  });
  return logoutRequest()
    .then(() => dispatch({ type: LOGOUT_SUCCESS }))
    .catch(() => dispatch({ type: LOGIN_FAILURE }));
};

export const getUser = () => (dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST });
  return fetchUserData()
    .then((data) => dispatch({ type: FETCH_USER_SUCCESS, payload: data }))
    .catch((e) => dispatch({ type: FETCH_USER_FAILURE, payload: e }));
};

export const setUserData = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const saveUser = (user) => (dispatch) => {
  dispatch({ type: SAVE_USER_REQUEST });
  updateUserData(user)
    .then((data) => {
      dispatch({
        type: SAVE_USER_SUCCESS,
        payload: data,
      });
    })
    .catch((e) => {
      dispatch({
        type: SAVE_USER_FAILURE,
        payload: e,
      });
    });
};

export const resetUser = () => {
  return {
    type: RESET_USER,
  };
};

export const setRecoveryEmail = (email) => ({
  type: SET_RECOVERY_EMAIL,
  payload: email,
});

export const unSetRecoveryEmail = () => ({
  type: UNSET_RECOVERY_EMAIL,
});
