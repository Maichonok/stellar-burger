import { AppDispatch } from "../models";
import { order as orderRequest } from "../../utils/api";
import { TIngredient } from "../models/ingredients";

export const ORDER_REQUEST: 'ORDER_REQUEST'  = 'ORDER_REQUEST';
export const ORDER_SUCCESS: 'ORDER_SUCCESS' = 'ORDER_SUCCESS';
export const ORDER_FAILURE: 'ORDER_FAILURE' = 'ORDER_FAILURE';
export const ORDER_MODAL_OPEN: 'ORDER_MODAL_OPEN' = 'ORDER_MODAL_OPEN';
export const ORDER_MODAL_CLOSE: 'ORDER_MODAL_CLOSE' = 'ORDER_MODAL_CLOSE';

export const order = (ingredients: Array<TIngredient>) => (dispatch: AppDispatch)  => {
    dispatch({
        type: ORDER_REQUEST
    });
    return orderRequest(ingredients)
        .then(({ name, order }) => {
            dispatch({
                type: ORDER_SUCCESS,
                payload: { name, order }
            })
        })
        .catch(error => {
            dispatch({
                type: ORDER_FAILURE,
                payload: error
            })
        });
}

export const openOrderModal = () => ({ type: ORDER_MODAL_OPEN });
export const closeOrderModal = () => ({ type: ORDER_MODAL_CLOSE });
