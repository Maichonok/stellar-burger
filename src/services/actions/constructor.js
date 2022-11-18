export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export const addIngredient = i => ({
    type: ADD_INGREDIENT,
    payload: i
});

export const deleteIngredient = i => ({
    type: DELETE_INGREDIENT,
    payload: i
});

export const moveIngredient = ingredients => ({
    type: MOVE_INGREDIENT,
    payload: ingredients
});