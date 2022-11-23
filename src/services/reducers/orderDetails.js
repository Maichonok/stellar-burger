import  {
    ORDER_REQUEST,
    ORDER_SUCCESS,
    ORDER_FAILURE,
    ORDER_MODAL_OPEN,
    ORDER_MODAL_CLOSE
} from '../actions/order';

const INITIAL_STATE = {
    isLoading: false,
    error: null,
    data: {
        name: '',
        order: { number: 0 }
    },
    open: false
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
                error: action.payload,
                data: {
                    name: '',
                    order: { number: 0 }
                }
            }
        }
        case ORDER_MODAL_OPEN: {
            return { ...state, open: true };        
        }
        case ORDER_MODAL_CLOSE: {
            return { ...state, open: false };
        }
        default: {
            return state;
        }
    }
};
