import {
    FETCH_INGREDIENTS_REQUEST,
    FETCH_INGREDIENTS_SUCCESS,
    FETCH_INGREDIENTS_FAILURE,
    TOGGLE_CURRENT_INGREDIENT
  } from "../actions/burgerIngredients";

const INITIAL_STATE = {
    data: [],
    isLoading: false,
    error: null,
    current: null
};

export default function burgerIngredients(
  state = INITIAL_STATE, 
  action  
) {
  switch (action.type) {
    case FETCH_INGREDIENTS_REQUEST: {
      return {
        ...state,
        error: null,
        isLoading: true
      };
    }
    case FETCH_INGREDIENTS_SUCCESS: {
        return {
            ...state,
            isLoading: false,
            error: null,
            data: action.payload
        };
    }
    case FETCH_INGREDIENTS_FAILURE: {
        return {
            ...state,
            isLoading: false,
            error: action.payload
        };
    }
    case TOGGLE_CURRENT_INGREDIENT: {
        return {
            ...state,
            current: state.current !== action.payload && action.payload
        };
    }
    default: {
      return state;
    }
  }
}