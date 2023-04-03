import {
  OPEN_INGREDIENT_MODAL,
  CLOSE_INGREDIENT_MODAL,
} from "../actions/ingredientsDetails";
import * as actions from "../actions/ingredientsDetails";

export interface IngredientsDetailsState {
  open: boolean;
}

const INITIAL_STATE: IngredientsDetailsState = {
  open: false,
};

const ingredientsDetail = (
  state = INITIAL_STATE,
  action: actions.TIngredientDetails
) => {
  switch (action.type) {
    case OPEN_INGREDIENT_MODAL: {
      return { ...state, open: true };
    }
    case CLOSE_INGREDIENT_MODAL: {
      return { ...state, open: false };
    }
    default: {
      return state;
    }
  }
};

export default ingredientsDetail;
