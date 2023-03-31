import {
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_FAILED,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_GET_ORDERS,
} from "../actions/wsUserActions";
import { Order } from "../models/orders";
import { TWsUserAction } from "../actions/wsUserActions";

interface WsUserReducer {
  orders: Array<Order>,
  isConnect: boolean,
  isError: boolean
}

const initialState: WsUserReducer  = {
  orders: [],
  isConnect: false,
  isError: false,
};

export function wsUserReducer(state = initialState, action: TWsUserAction) {
  switch (action.type) {
    case WS_USER_CONNECTION_SUCCESS: {
      return {
        ...state,
        isConnect: true,
      };
    }
    case WS_USER_CONNECTION_CLOSED: {
      return {
        ...state,
        isConnect: false,
      };
    }
    case WS_USER_CONNECTION_FAILED: {
      return {
        ...state,
        isConnect: false,
        isError: true,
      };
    }
    case WS_USER_GET_ORDERS: {
      return {
        ...state,
        orders: action.payload.orders,
      };
    }

    default:
      return state;
  }
}
