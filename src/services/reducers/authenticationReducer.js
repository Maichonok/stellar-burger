import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/authentication";

const INITIAL_STATE = {
    name: "",
    email: "",
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
        default: {
            return state;
        }
    }
}

export default userDetails;