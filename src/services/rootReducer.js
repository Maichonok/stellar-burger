import { combineReducers } from 'redux'
import orderConstructor from './reducers/constructorReducers';
import burgerIngredients from './reducers/burgerIngredientsReducers';
import ingredientsDetails from './reducers/ingredientsDetailsReducers';
import orders from './reducers/orderReducers';

const rootReducer = combineReducers({
    orderConstructor,
    burgerIngredients,
    ingredientsDetails,
    orders
})

export default rootReducer
