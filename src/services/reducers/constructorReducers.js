import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_INGREDIENT,
} from "../actions/constructor";
import { ORDER_FAILURE, ORDER_SUCCESS } from "../actions/order";
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
  ingredients: []
};

export default function orderConstructor(
  state = INITIAL_STATE, 
  action  
) {
  switch (action.type) {
    case ORDER_SUCCESS: {
      return INITIAL_STATE;
    }
    case ORDER_FAILURE: {
      return INITIAL_STATE;
    }
    case ADD_INGREDIENT: {
      const ingredientType = action.payload.type;
      if (ingredientType === "bun") {
        const filtered = state.ingredients.filter(i => i.type !== "bun");
        const newBun = { ...action.payload, uuid: uuid() };
        return {
          ...state,
          ingredients: [...filtered, newBun]
        };    
      }

      if (state.ingredients.length === 0) {
        return state;    
      }

      return {
        ...state,
        ingredients: [
          ...state.ingredients, 
          {...action.payload, uuid: uuid()}
        ]
      };
    }
    case DELETE_INGREDIENT: {
      const index = state.ingredients.findIndex(i => i.uuid === action.payload);
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