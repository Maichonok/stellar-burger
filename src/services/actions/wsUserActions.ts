import { Orders } from "../models/orders";

export const WS_USER_CONNECTION_START: "WS_USER_CONNECTION_START" =
  "WS_USER_CONNECTION_START";
export const WS_USER_CONNECTION_SUCCESS: "WS_USER_CONNECTION_SUCCESS" =
  "WS_USER_CONNECTION_SUCCESS";
export const WS_USER_CONNECTION_CLOSED: "WS_USER_CONNECTION_CLOSED" =
  "WS_USER_CONNECTION_CLOSED";
export const WS_USER_CONNECTION_FAILED: "WS_USER_CONNECTION_FAILED" =
  "WS_USER_CONNECTION_FAILED";
export const WS_USER_GET_ORDERS: "WS_USER_GET_ORDERS" = "WS_USER_GET_ORDERS";
export const WS_USER_SEND_ORDERS: "WS_USER_SEND_ORDERS" = "WS_USER_SEND_ORDERS";

export interface WsUserConnectedStart {
  readonly type: typeof WS_USER_CONNECTION_START;
}
export interface WsUserConnectedSuccess {
  readonly type: typeof WS_USER_CONNECTION_SUCCESS;
}

export interface WsUserConnectedClosed {
  readonly type: typeof WS_USER_CONNECTION_CLOSED;
}

export interface WsUserConnectedFailed {
  readonly type: typeof WS_USER_CONNECTION_FAILED;
}

export interface WsUserGetOrders {
  readonly type: typeof WS_USER_GET_ORDERS;
  payload: Orders;
}

export interface WsUserSendOrders {
  readonly type: typeof WS_USER_SEND_ORDERS;
  payload: Orders;
}

export type TWsUserAction =
  | WsUserConnectedStart
  | WsUserConnectedSuccess
  | WsUserConnectedClosed
  | WsUserConnectedFailed
  | WsUserGetOrders
  | WsUserSendOrders;

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

export function wsUserGetMessage(orders: Orders) {
  return {
    type: WS_USER_GET_ORDERS,
    payload: orders,
  };
}

export function wsUserSendMessage(orders: Orders) {
  return {
    type: WS_USER_SEND_ORDERS,
    payload: orders,
  };
}
