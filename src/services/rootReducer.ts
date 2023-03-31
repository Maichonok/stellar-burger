import { combineReducers } from 'redux'
import orderConstructor from './reducers/constructorReducers';
import burgerIngredients from './reducers/burgerIngredientsReducers';
import ingredientsDetail from './reducers/ingredientsDetailsReducers';
import orderDetails from './reducers/orderDetails';
import auth from './reducers/authenticationReducer';
import { wsReducer } from './reducers/wsReducer';
import { wsUserReducer}  from './reducers/wsUserReducer';

const rootReducer:any = combineReducers({
    orderConstructor,
    burgerIngredients,
    ingredientsDetail,
    orderDetails,
    auth,
    wsReducer,
    wsUserReducer
})

export default rootReducer;
