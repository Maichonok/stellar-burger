import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAILURE,
  ORDER_MODAL_OPEN,
  ORDER_MODAL_CLOSE,
} from "../actions/order";
import { TOrder, TOrderModal } from "../actions/order";

interface OrderState {
  isLoading: boolean;
  error: string;
  data: { name: string; order: { number: number } };
  open: boolean;
}

const INITIAL_STATE: OrderState = {
  isLoading: false,
  error: "",
  data: {
    name: "",
    order: { number: 0 },
  },
  open: false,
};

export default function orderDetails(
  state: OrderState = INITIAL_STATE,
  action: TOrder | TOrderModal
) {
  switch (action.type) {
    case ORDER_REQUEST: {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    }
    case ORDER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        data: action.payload,
      };
    }
    case ORDER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: {
          name: "",
          order: { number: 0 },
        },
      };
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
}
