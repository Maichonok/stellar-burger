import {
  FETCH_INGREDIENTS_REQUEST,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_FAILURE,
  TOGGLE_CURRENT_INGREDIENT,
} from "../actions/burgerIngredients";

import { TIngredient } from "../models/ingredients";
import * as actions from "../actions/burgerIngredients";

export type IngredientsState = Readonly<{
  data: Array<TIngredient>;
  isLoading: boolean;
  error: string;
  current: TIngredient | null;
}>;

const INITIAL_STATE: IngredientsState = {
  data: [],
  isLoading: false,
  error: "",
  current: null,
};

export default function burgerIngredients(
  state: IngredientsState = INITIAL_STATE,
  action: actions.TIngredients
) {
  switch (action.type) {
    case FETCH_INGREDIENTS_REQUEST: {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    }
    case FETCH_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        data: action.payload,
      };
    }
    case FETCH_INGREDIENTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case TOGGLE_CURRENT_INGREDIENT: {
      return {
        ...state,
        current:
          state.current !== action.payload ? action.payload : state.current,
      };
    }
    default: {
      return state;
    }
  }
}
