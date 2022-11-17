import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Headers/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import appStyle from "./App.module.css";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { getIngredients, toggleCurrent } from "../../services/actions/burgerIngredients";

function App() {
  const [ingredientModal, setIngredientModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);

  const [data, setData] = useState({
    data: [],
  });

  const isLoading = useSelector((state) => state.burgerIngredients.isLoading);
  const error = useSelector((state) => state.burgerIngredients.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  const closePopup = () => {
    setIngredientModal(false);
    setOrderModal(false);
  };

  const openOrderModal = () => {
    setOrderModal(true);
  };

  const openIngredientModal = id => {
    setIngredientModal(true);
    dispatch(toggleCurrent(id));
  };

  return (
    <div className="page">
      <Header />
      <main className={appStyle.main}>
        {isLoading && <h1 className={appStyle.message}>{`Загрузка...`}</h1>}
        {!!error && `Упс, что-то пошло не так, произошла ошибка ${error}`}
        {!isLoading && !error && (
          <>
            <BurgerIngredients open={openIngredientModal} />
            <BurgerConstructor open={openOrderModal} />
          </>
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
        <Modal isOpen={orderModal} close={closePopup}>
          <OrderDetails orderNumber={data.orderNumber} />
        </Modal>
      )}
    </div>
  );
}

export { App };
