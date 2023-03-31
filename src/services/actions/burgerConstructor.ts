import { TIngredient } from "../models/ingredients";
export const ADD_INGREDIENT: "ADD_INGREDIENT" = "ADD_INGREDIENT";
export const MOVE_INGREDIENT: "MOVE_INGREDIENT" = "MOVE_INGREDIENT";
export const DELETE_INGREDIENT: "DELETE_INGREDIENT" = "DELETE_INGREDIENT";

export type TConstructor = AddIngredient | MoveIngredient | DeleteIngredient;

export interface AddIngredient {
  readonly type: typeof ADD_INGREDIENT,
  payload: TIngredient
}

export interface MoveIngredient {
  readonly type: typeof MOVE_INGREDIENT,
  payload: Array<TIngredient>
}

export interface DeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  payload: string
}

export const addIngredient = (i: TIngredient) => ({
  type: ADD_INGREDIENT,
  payload: i,
});

export const deleteIngredient = (i: TIngredient) => ({
  type: DELETE_INGREDIENT,
  payload: i,
});

export const moveIngredient = (ingredients: Array<TIngredient>) => ({
  type: MOVE_INGREDIENT,
  payload: ingredients,
});
