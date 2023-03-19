import {
  WS_CONNECTION_FAILED,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
  WS_CONNECTION_CLOSED,
} from "../actions/wsActions";

const initialState = {
  orders: [],
  isConnect: false,
  isError: false,
  total: null,
  totalToday: null,
};

export function wsReducer(state = initialState, action) {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        isConnect: true,
      };
    case WS_CONNECTION_FAILED:
      return {
        ...state,
        isConnect: false,
        isError: true,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        isConnect: false,
      };
    case WS_GET_ORDERS:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    default:
      return state;
  }
}
