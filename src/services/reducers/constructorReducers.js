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
      if (action.payload.type === "bun") {
        const filtered = state.ingredients.filter(i => i.type !== "bun");
        const newBun = { ...action.payload };
        return {
          ...state,
          ingredients: [...filtered, newBun]
        };    
      }

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