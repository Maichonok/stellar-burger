import { 
    OPEN_INGREDIENT_MODAL, 
    CLOSE_INGREDIENT_MODAL 
} from "../actions/ingredientsDetails";

const INITIAL_STATE = {
    open: false
};

const ingredientsDetail = (state = INITIAL_STATE, action) => {
    switch(action.type) {
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
}

export default ingredientsDetail;