import { loginRequest } from "../../utils/api";
import { registerRequest } from "../../utils/api";
import { restorePassword } from "../../utils/api";
import { resetPassword } from "../../utils/api";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const FORGOT_PASS_REQUEST = 'FORGOT_PASS_REQUEST';
export const FORGOT_PASS_SUCCESS = 'FORGOT_PASS_SUCCESS';
export const FORGOT_PASS_FAILURE = 'FORGOT_PASS_FAILURE';

export const RESET_PASS_REQUEST = 'RESET_PASS_REQUEST';
export const RESET_PASS_SUCCESS = 'RESET_PASS_SUCCESS';
export const RESET_PASS_FAILURE = 'RESET_PASS_FAILURE';

export const login = (email, password) => dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    loginRequest(email, password)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })        
        })
        .catch(e => {
            dispatch({
                type: LOGIN_FAILURE,
                payload: e
            });
        })
}

export const register = (name, email, pass) => dispatch => {
    dispatch({ type: REGISTER_REQUEST });
    registerRequest(name, email, pass)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })        
        })
        .catch(e => {
            dispatch({
                type: REGISTER_FAILURE,
                payload: e
            });
        })
}

export const forgotPass = (email) => dispatch => {
    dispatch({ type: FORGOT_PASS_REQUEST });
    return restorePassword(email)
        .then(res => {
            dispatch({
                type: FORGOT_PASS_SUCCESS,
                payload: res.data
            })        
        })
        .catch(e => {
            dispatch({
                type: FORGOT_PASS_FAILURE,
                payload: e
            });
        })
}

export const resetPass = (pass, code) => dispatch => {
    dispatch({ type: RESET_PASS_REQUEST });
    return resetPassword(pass, code)
        .then(res => {
            dispatch({
                type: RESET_PASS_SUCCESS,
                payload: res.data
            })        
        })
        .catch(e => {
            dispatch({
                type: RESET_PASS_FAILURE,
                payload: e
            });
        })
}