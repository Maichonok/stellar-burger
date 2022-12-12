import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import appStyle from "./App.module.css";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { getIngredients } from "../../services/actions/burgerIngredients";
import { closeIngredientModal } from "../../services/actions/ingredientsDetails";
import { closeOrderModal } from "../../services/actions/order";

function App() {
  const ingredientModal = useSelector(state => state.ingredientsDetail.open);
  const orderModal = useSelector(state => state.orderDetails.open);
  const isLoading = useSelector(state => state.burgerIngredients.isLoading);
  const error = useSelector(state => state.burgerIngredients.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  const closePopup = () => {
    dispatch(closeIngredientModal());
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
      {ingredientModal && (
        <Modal
          isOpen={ingredientModal}
          text="Детали ингредиента"
          close={closePopup}
        >
          <IngredientDetails />
        </Modal>
      )}
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

export { App };
