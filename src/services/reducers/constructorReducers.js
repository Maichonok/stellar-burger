import {
    ADD_INGREDIENT,
    ADD_INGREDIENT_BUN,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT,
  } from "../actions/constructor";

const INITIAL_STATE = {
  ingredients: []
};

export default function orderConstructor(
  state = INITIAL_STATE, 
  action  
) {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return state;
    }
    

    default: {
      return state;
    }
  }
}