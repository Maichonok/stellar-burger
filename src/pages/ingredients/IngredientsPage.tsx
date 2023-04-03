import React from "react";
import { IngredientDetails } from "../../components/IngredientDetails/IngredientDetails";
import IngredientPageStyles from "./IngredientsPage.module.css";

export const Ingredients = () => {
  return (
    <div className={IngredientPageStyles.content_box}>
      <h3 className={`text text_type_main-large`}>Детали ингредиента</h3>{" "}
      <IngredientDetails />
    </div>
  );
};
