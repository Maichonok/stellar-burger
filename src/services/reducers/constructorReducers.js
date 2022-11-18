import {
    ADD_INGREDIENT,
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
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    }
    case DELETE_INGREDIENT: {
      const index = state.ingredients.findIndex(i => i._id === action.payload);
      state.ingredients.splice(index, 1)
      
      return {
        ...state,
        ingredients: [...state.ingredients]
      }
    }
    case MOVE_INGREDIENT: {
      return {
        ...state,
        ingredients: action.payload
      }
    }
    default: {
      return state;
    }
  }
}