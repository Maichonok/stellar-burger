import { loginRequest } from "../../utils/api";
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

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