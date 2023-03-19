export const WS_USER_CONNECTION_START = "WS_USER_CONNECTION_START";
export const WS_USER_CONNECTION_SUCCESS = "WS_USER_CONNECTION_SUCCESS";
export const WS_USER_CONNECTION_CLOSED = "WS_USER_CONNECTION_CLOSED";
export const WS_USER_CONNECTION_FAILED = "WS_USER_CONNECTION_FAILED";
export const WS_USER_GET_ORDERS = "WS_USER_GET_ORDERS";
export const WS_USER_SEND_ORDERS = "WS_USER_SEND_ORDERS";

export function wsUserConnectedStart() {
  return {
    type: WS_USER_CONNECTION_START,
  };
}

export function wsUserConnectedSuccess() {
  return {
    type: WS_USER_CONNECTION_SUCCESS,
  };
}

export function wsUserConnectedClosed() {
  return {
    type: WS_USER_CONNECTION_CLOSED,
  };
}

export function wsUserConnectedFailed() {
  return {
    type: WS_USER_CONNECTION_FAILED,
  };
}

export function wsUserGetMessage(order) {
  return {
    type: WS_USER_GET_ORDERS,
    payload: order,
  };
}

export function wsUserSendMessage(order) {
  return {
    type: WS_USER_SEND_ORDERS,
    payload: order,
  };
}
