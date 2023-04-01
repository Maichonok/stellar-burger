import { AppDispatch, AppThunk } from "../models";
import { order as orderRequest } from "../../utils/api";
import { TIngredient } from "../models/ingredients";
import { Order } from "../models/orders";

export const ORDER_REQUEST: "ORDER_REQUEST" = "ORDER_REQUEST";
export const ORDER_SUCCESS: "ORDER_SUCCESS" = "ORDER_SUCCESS";
export const ORDER_FAILURE: "ORDER_FAILURE" = "ORDER_FAILURE";
export const ORDER_MODAL_OPEN: "ORDER_MODAL_OPEN" = "ORDER_MODAL_OPEN";
export const ORDER_MODAL_CLOSE: "ORDER_MODAL_CLOSE" = "ORDER_MODAL_CLOSE";

export interface OrderRequest {
  readonly type: typeof ORDER_REQUEST;
}

export interface OrderRequestSuccess {
  readonly type: typeof ORDER_SUCCESS;
  payload: {
    name: string;
    order: Order;
  };
}

export interface OrderRequestFailure {
  readonly type: typeof ORDER_FAILURE;
  readonly payload: string;
}
export type TOrder = OrderRequest | OrderRequestSuccess | OrderRequestFailure;

export interface OpenOrderModal {
  readonly type: typeof ORDER_MODAL_OPEN;
}

export interface CloseOrderModal {
  readonly type: typeof ORDER_MODAL_CLOSE;
}

export type TOrderModal = OpenOrderModal | CloseOrderModal;

export const openOrderModal = (): OpenOrderModal => {
  return {
    type: ORDER_MODAL_OPEN,
  };
};

export const closeOrderModal = (): CloseOrderModal => {
  return {
    type: ORDER_MODAL_CLOSE,
  };
};

export const order: AppThunk =
  (ingredients: Array<TIngredient>) => (dispatch: AppDispatch) => {
    dispatch({
      type: ORDER_REQUEST,
    });
    return orderRequest(ingredients)
      .then(({ name, order }) => {
        dispatch({
          type: ORDER_SUCCESS,
          payload: { name, order },
        });
      })
      .catch((error) => {
        dispatch({
          type: ORDER_FAILURE,
          payload: error,
        });
      });
  };
