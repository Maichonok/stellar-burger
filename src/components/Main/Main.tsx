import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { closeOrderModal } from "../../services/actions/order";

import { useSelector, useDispatch } from "../../services/models";

import appStyle from "./Main.module.css";

export function Main() {
  const orderModal = useSelector((state) => state.orderDetails.open);
  const isLoading = useSelector((state) => state.burgerIngredients.isLoading);
  const error = useSelector((state) => state.burgerIngredients.error);
  const dispatch = useDispatch();

  const closePopup = () => {
    // dispatch(closeIngredientModal());
    dispatch(closeOrderModal());
  };

  return (
    <div className="page">
      <main className={appStyle.main}>
        {isLoading && <h1 className={appStyle.message}>{`Загрузка...`}</h1>}
        {!!error && `${error}`}
        {!isLoading && !error && (
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        )}
      </main>
      {orderModal && (
        <Modal isOpen={orderModal} close={closePopup}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}
