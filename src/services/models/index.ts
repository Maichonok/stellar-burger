import { Action, ActionCreator } from "redux";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { store } from "../../index";
import { TUser } from "../actions/authentication";
import { TConstructor } from "../actions/burgerConstructor";
import { TIngredients } from "../actions/burgerIngredients";
import { TIngredientDetails } from "../actions/ingredientsDetails";
import { TOrder } from "../actions/order";
import { TWsConnection } from "../actions/wsActions";
import { TWsUserAction } from "../actions/wsUserActions";

type TApplicationActions =
  | TUser
  | TConstructor
  | TIngredients
  | TIngredientDetails
  | TIngredientDetails
  | TOrder
  | TWsConnection
  | TWsUserAction;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch & AppThunk>();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = Promise<any> | void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
