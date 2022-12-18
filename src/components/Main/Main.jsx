import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
// import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { OrderDetails } from "../OrderDetails/OrderDetails";
// import { closeIngredientModal } from "../../services/actions/ingredientsDetails";
import { closeOrderModal } from "../../services/actions/order";

import appStyle from "./Main.module.css";

function Main() {
  // const ingredientModal = useSelector(state => state.ingredientsDetail.open);
  const orderModal = useSelector(state => state.orderDetails.open);
  const isLoading = useSelector(state => state.burgerIngredients.isLoading);
  const error = useSelector(state => state.burgerIngredients.error);
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
        <Modal 
          isOpen={orderModal} 
          close={closePopup}
        >
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export { Main };
