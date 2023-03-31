export const OPEN_INGREDIENT_MODAL = 'OPEN_INGREDIENT_MODAL';
export const CLOSE_INGREDIENT_MODAL = 'CLOSE_INGREDIENT_MODAL';

export type TIngredientDetails = OpenIngredientModal | CloseIngredientModal;

export interface OpenIngredientModal {
    readonly type: typeof OPEN_INGREDIENT_MODAL,
}

export interface CloseIngredientModal {
    readonly type: typeof CLOSE_INGREDIENT_MODAL,
}

export const openIngredientModal = (): OpenIngredientModal => ({
    type: OPEN_INGREDIENT_MODAL
});

export const closeIngredientModal = (): CloseIngredientModal => ({
    type: CLOSE_INGREDIENT_MODAL
});