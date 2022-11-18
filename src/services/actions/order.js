import { order as orderRequest } from "../../utils/api";

export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILURE = 'ORDER_FAILURE';

export const order = ingredients => dispatch => {
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