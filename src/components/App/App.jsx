import React, { useEffect, useState } from "react";
import Header from "../Headers/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import appStyle from "./App.module.css";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { getData, order } from "../../utils/api";
import IngredientsContext from "../../context/ingredientsContext";

function App() {
  const [ingredientModal, setIngredientModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);

  const [data, setData] = useState({
    isLoading: false,
    hasError: false,
    data: [],
    error: "",
    orderNumber: 0
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
    setData({ hasError: false, isLoading: true, error: "" });
    order(data.data.map(item => item._id))
      .then(res => {
        setOrderModal(true);

        setData({ ...data, isLoading: false, error: "", orderNumber: res.order.number });
      })
      .catch((err) => {
        setData({ ...data, hasError: true, isLoading: false, error: err });
      });
  };

  const openIngredientModal = () => {
    setIngredientModal(true);
  };

  return (
    <div className="page">
      <IngredientsContext.Provider value={data.data}>
        <Header />
        <main className={appStyle.main}>
          {data.isLoading === true && (
          <h1 className={appStyle.message}>{`Загрузка...`}</h1>
        )}
          {data.hasError && `Упс, что-то пошло не так, произошла ошибка ${data.error}`}
          {!data.isLoading && !data.hasError && (
            <>
              <BurgerIngredients
                open={() => openIngredientModal()}
              />
              <BurgerConstructor 
                open={openOrderModal} 
              />
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
            <OrderDetails orderNumber={data.orderNumber} />
          </Modal>
        )}
      </IngredientsContext.Provider>  
    </div>
  );
}

export { App };
