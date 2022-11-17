import { combineReducers } from 'redux'
import orderConstructor from './reducers/constructorReducers';
import burgerIngredients from './reducers/burgerIngredientsReducers';
import ingredientsDetails from './reducers/ingredientsDetailsReducers';
import orderDetails from './reducers/orderDetails';

const rootReducer = combineReducers({
    orderConstructor,
    burgerIngredients,
    ingredientsDetails,
    orderDetails
})

export default rootReducer;
