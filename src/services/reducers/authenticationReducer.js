import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/authentication";
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../actions/authentication";
import { FORGOT_PASS_REQUEST, FORGOT_PASS_SUCCESS, FORGOT_PASS_FAILURE } from "../actions/authentication";
import { RESET_PASS_REQUEST, RESET_PASS_SUCCESS, RESET_PASS_FAILURE } from "../actions/authentication";
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "../actions/authentication";
import { SET_USER } from "../actions/authentication";


const INITIAL_STATE = {
    user: {
        email: '',
        password: '',
        name: ''
    },
    error: null,
    loading: false
};

const userDetails = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null
            };        
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null
            };        
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };        
        }
        case REGISTER_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null
            };        
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null
            };        
        }
        case REGISTER_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };        
        }
        case FORGOT_PASS_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null
            };        
        }
        case FORGOT_PASS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null
            };        
        }
        case FORGOT_PASS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };        
        }
        case RESET_PASS_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null
            };        
        }
        case RESET_PASS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null
            };        
        }
        case RESET_PASS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };        
        }
        case FETCH_USER_REQUEST: {
            return {
                ...state,
                error: null,
                loading: true
            }
        }
        case FETCH_USER_SUCCESS: {
            return {
                ...state,
                error: null,
                loading: false,
                user: {
                    ...state.user,
                    ...action.payload.user
                }
            }
        }
        case FETCH_USER_FAILURE: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }
        case SET_USER: {
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default userDetails;