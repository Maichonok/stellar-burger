import React, { FC } from "react";
import { useParams } from "react-router-dom";
import IngredientDetailsStyle from "./IngredientDetails.module.css";
import { useSelector } from "../../services/models";

interface Props {
  text: string;
  value: number;
}

export function IngredientDetails() {
  const { id } = useParams<{ id: string }>();
  const ingredients = useSelector((state) => state.burgerIngredients.data);
  const data = ingredients.find((i) => i._id === id);

  if (!data) {
    return null;
  }

  const Ingredient: FC<Props> = (props) => {
    return (
      <li className={`${IngredientDetailsStyle.item}`}>
        <p
          className={`${IngredientDetailsStyle.text} text text_type_main-default text_color_inactive pb-2`}
        >
          {props.text}
        </p>
        <p
          className={`${IngredientDetailsStyle.text} text text_type_main-default text_color_inactive`}
        >
          {props.value}
        </p>
      </li>
    );
  };

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
