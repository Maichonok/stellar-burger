import {
    FETCH_INGREDIENTS_REQUEST,
    FETCH_INGREDIENTS_SUCCESS,
    FETCH_INGREDIENTS_FAILURE
  } from "../actions/burgerIngredients";

const INITIAL_STATE = {};

export default function orderConstructor(
  state = INITIAL_STATE, 
  action  
) {
  switch (action.type) {
    case FETCH_INGREDIENTS_REQUEST: {
      return state;
    }
    case FETCH_INGREDIENTS_SUCCESS: {
        return state;
    }
    case FETCH_INGREDIENTS_FAILURE: {
        return state;
    }
    default: {
      return state;
    }
  }
}