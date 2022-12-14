import React from "react";
import IngredientDetailsStyle from "./IngredientDetails.module.css";

import { ingredientType } from "../../utils/ingredient";

function IngredientDetails({ data }) {
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

IngredientDetails.propTypes = {
  data: ingredientType.isRequired,
};

export { IngredientDetails };
