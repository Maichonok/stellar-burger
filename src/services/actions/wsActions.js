export const WS_CONNECTION_START = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_FAILED = "WS_CONNECTION_FAILED";
export const WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED";
export const WS_GET_ORDERS = "WS_GET_ORDERS";
export const WS_SEND_ORDERS = "WS_SEND_ORDERS";

export function wsConnectedStart() {
  return {
    type: WS_CONNECTION_START,
  };
}

export function wsConnectedSuccess() {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
}

export function wsConnectedClosed() {
  return {
    type: WS_CONNECTION_CLOSED,
  };
}

export function wsConnectedFailed() {
  return {
    type: WS_CONNECTION_FAILED,
  };
}

export function wsGetMessage(order) {
  return {
    type: WS_GET_ORDERS,
    payload: order,
  };
}

export function wsSendMessage(order) {
  return {
    type: WS_SEND_ORDERS,
    payload: order,
  };
}
