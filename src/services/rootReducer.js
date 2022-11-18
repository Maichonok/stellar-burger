import { combineReducers } from 'redux'
import orderConstructor from './reducers/constructorReducers';
import burgerIngredients from './reducers/burgerIngredientsReducers';
import ingredientsDetail from './reducers/ingredientsDetailsReducers';
import orderDetails from './reducers/orderDetails';

const rootReducer = combineReducers({
    orderConstructor,
    burgerIngredients,
    ingredientsDetail,
    orderDetails
})

export default rootReducer;
