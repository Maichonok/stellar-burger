import React, { useEffect, useState } from "react";
import Header from "../Headers/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import appStyle from "./App.module.css";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { getData } from "../../utils/api";

function App() {
  const [ingredientModal, setIngredientModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);

  const [data, setData] = useState({
    isLoading: false,
    hasError: false,
    data: [],
    error: "",
  });

  useEffect(() => {
    setData({ ...data, hasError: false, isLoading: true, error: "" });
    getData()
      .then((res) => {
        setData({ ...data, data: res.data, isLoading: false, error: "" });
      })
      .catch((err) => {
        setData({ ...data, hasError: true, isLoading: false, error: err });
      });
  }, []);

  const closePopup = () => {
    setIngredientModal(false);
    setOrderModal(false);
  };
  const openOrderModal = () => {
    setOrderModal(true);
  };

  const openIngredientModal = () => {
    setIngredientModal(true);
  };

  return (
    <div className="page">
      <Header />
      <main className={appStyle.main}>
        {data.isLoading === true && (
        <h1 className={appStyle.message}>{`Загрузка...`}</h1>
      )}
        {data.hasError && `Упс, что-то пошло не так, произошла ошибка ${data.error}`}
        {!data.isLoading && !data.hasError && (
          <>
            <BurgerIngredients
              data={data.data}
              open={() => openIngredientModal()}
            />
            <BurgerConstructor open={openOrderModal} data={data.data}/>
          </>
        )}
      </main>
      {ingredientModal && (
        <Modal isOpen={ingredientModal} text="Детали ингредиента" close={closePopup}>
          <IngredientDetails data={data.data[0]} />
        </Modal>
      )}
      {orderModal && (
        <Modal isOpen={orderModal} close={closePopup}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export { App };
