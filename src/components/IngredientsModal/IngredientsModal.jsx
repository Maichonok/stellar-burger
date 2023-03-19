import React from "react";
import { useHistory } from "react-router-dom";
import Modal from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";

export const IngredientsModal = (props) => {
  let history = useHistory();

  let back = (e) => {
    history.goBack();
  };

  return (
    <Modal isOpen text="Детали ингредиента" close={back}>
      <IngredientDetails />
    </Modal>
  );
};
