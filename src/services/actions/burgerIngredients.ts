import { AppDispatch, AppThunk } from "../models";
import { getData } from "../../utils/api";
import { TIngredient } from "../models/ingredients";
export const FETCH_INGREDIENTS_REQUEST: "FETCH_INGREDIENTS_REQUEST" =
  "FETCH_INGREDIENTS_REQUEST";
export const FETCH_INGREDIENTS_SUCCESS: "FETCH_INGREDIENTS_SUCCESS" =
  "FETCH_INGREDIENTS_SUCCESS";
export const FETCH_INGREDIENTS_FAILURE: "FETCH_INGREDIENTS_FAILURE" =
  "FETCH_INGREDIENTS_FAILURE";
export const TOGGLE_CURRENT_INGREDIENT: "TOGGLE_CURRENT_INGREDIENT" =
  "TOGGLE_CURRENT_INGREDIENT";

export type TIngredients =
  | FetchIngredientsRequest
  | FetchIngredientsSuccess
  | FetchIngredientsFailure
  | ToggleIngredient;

export interface FetchIngredientsRequest {
  readonly type: typeof FETCH_INGREDIENTS_REQUEST;
}

export interface FetchIngredientsSuccess {
  readonly type: typeof FETCH_INGREDIENTS_SUCCESS;
  payload: Array<TIngredient>;
}

export interface FetchIngredientsFailure {
  readonly type: typeof FETCH_INGREDIENTS_FAILURE;
  payload: string;
}

export interface ToggleIngredient {
  readonly type: typeof TOGGLE_CURRENT_INGREDIENT,
  payload: TIngredient
}

export const getIngredients: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch({
    type: FETCH_INGREDIENTS_REQUEST,
  });

  return getData()
    .then(({ data }) => {
      dispatch({
        type: FETCH_INGREDIENTS_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_INGREDIENTS_FAILURE,
        payload: error,
      });
    });
};

export const toggleCurrent = (id: TIngredient):TIngredients => ({
  type: TOGGLE_CURRENT_INGREDIENT,
  payload: id,
});
