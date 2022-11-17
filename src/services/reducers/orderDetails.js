import  {
    ORDER_REQUEST,
    ORDER_SUCCESS,
    ORDER_FAILURE
} from '../actions/order';

const INITIAL_STATE = {
    isLoading: false,
    error: null,
    data: {
        name: '',
        order: { number: 0 }
    }
};

export default function orderDetails(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ORDER_REQUEST: {
            return {
                ...state,
                error: null,
                isLoading: true
            }        
        }
        case ORDER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                error: null,
                data: action.payload
            }
        }
        case ORDER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
};
