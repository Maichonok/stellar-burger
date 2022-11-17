import { getData } from '../../utils/api';

export const FETCH_INGREDIENTS_REQUEST = 'FETCH_INGREDIENTS_REQUEST';
export const FETCH_INGREDIENTS_SUCCESS = 'FETCH_INGREDIENTS_SUCCESS';
export const FETCH_INGREDIENTS_FAILURE = 'FETCH_INGREDIENTS_FAILURE';

export const TOGGLE_CURRENT_INGREDIENT = 'TOGGLE_CURRENT_INGREDIENT';

export const getIngredients = () => dispatch => {
    dispatch({
        type: FETCH_INGREDIENTS_REQUEST
    });

    return getData()
        .then(({ data }) => {
            dispatch({
                type: FETCH_INGREDIENTS_SUCCESS,
                payload: data
            });        
        })
        .catch(error => {
            dispatch({
                type: FETCH_INGREDIENTS_FAILURE,
                payload: error
            });        
        });
};

export const toggleCurrent = id => ({
    type: TOGGLE_CURRENT_INGREDIENT,
    payload: id
});
