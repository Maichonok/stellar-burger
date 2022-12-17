import React from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import burgerIngredients from "../../services/reducers/burgerIngredientsReducers";
import IngredientDetailsStyle from "./IngredientDetails.module.css";

function IngredientDetails() {
  const { id } = useParams();
  const ingredients = useSelector(state => state.burgerIngredients.data);
  const idFromStore = useSelector(state => state.burgerIngredients.current);
  const currentIngredient = id || idFromStore;
  const data = ingredients.find(i => i._id === currentIngredient);

  if (!data) {
    return null;
  }

  function Ingredient(data) {
    return (
      <li className={`${IngredientDetailsStyle.item}`}>
        <p
          className={`${IngredientDetailsStyle.text} text text_type_main-default text_color_inactive pb-2`}
        >
          {data.text}
        </p>
        <p
          className={`${IngredientDetailsStyle.text} text text_type_main-default text_color_inactive`}
        >
          {data.value}
        </p>
      </li>
    );
  }

  return (
    <div className={`${IngredientDetailsStyle.wrapper}  pr-25 pb-15 pl-25`}>
      <img
        src={data.image_large}
        alt={data.name}
        className={IngredientDetailsStyle.image}
      />
      <p
        className={`${IngredientDetailsStyle.title} text text_type_main-medium pt-4`}
      >
        {data.name}
      </p>
      <ul className={`${IngredientDetailsStyle.listItems} pt-8`}>
        <Ingredient text="Калории,ккал" value={data.calories} />
        <Ingredient text="Белки, г" value={data.proteins} />
        <Ingredient text="Жиры, г" value={data.fat} />
        <Ingredient text="Углеводы, г" value={data.carbohydrates} />
      </ul>
    </div>
  );
}

export { IngredientDetails };
