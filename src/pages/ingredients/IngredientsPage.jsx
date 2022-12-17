import React from "react";
import { IngredientDetails } from "../../components/IngredientDetails/IngredientDetails";
import styles from "./IngredientsPage.module.css";

export const Ingredients = () => {
  return (
    <div className={styles.content_box}>
      <IngredientDetails />
    </div>
  );
};
