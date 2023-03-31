import { Orders } from "../models/orders";

export const WS_CONNECTION_START: "WS_CONNECTION_START" = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS" =
  "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_FAILED: "WS_CONNECTION_FAILED" =
  "WS_CONNECTION_FAILED";
export const WS_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED" =
  "WS_CONNECTION_CLOSED";
export const WS_GET_ORDERS: "WS_GET_ORDERS" = "WS_GET_ORDERS";
export const WS_SEND_ORDERS: "WS_SEND_ORDERS" = "WS_SEND_ORDERS";

export interface ConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
}

export interface ConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface ConnectionFailed {
  readonly type: typeof WS_CONNECTION_FAILED;
}

export interface ConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface GetOrders {
  readonly type: typeof WS_GET_ORDERS;
  payload: Orders
}

export interface SendOrders {
  readonly type: typeof WS_SEND_ORDERS;
}

export type TWsConnection =
  | ConnectionStart
  | ConnectionClosed
  | ConnectionSuccess
  | ConnectionFailed
  | GetOrders
  | SendOrders;

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

export function wsGetMessage(orders: Orders) {
  return {
    type: WS_GET_ORDERS,
    payload: orders,
  };
}

export function wsSendMessage(orders: Orders) {
  return {
    type: WS_SEND_ORDERS,
    payload: orders,
  };
}
