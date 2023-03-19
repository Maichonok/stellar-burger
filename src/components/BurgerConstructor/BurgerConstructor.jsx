import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import burgerConstructorStyle from "./BurgerConstructor.module.css";
import { Constructor } from "./Constructor/Constructor";
import { ButtonLarge } from "./ButtonLarge/ButtonLarge";
import { FullPrice } from "./FullPrice/FullPrice";
import { order, openOrderModal } from "../../services/actions/order";
import { isLoggedIn } from "../../utils/auth";

export default function BurgerConstructor(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector(state => state.orderConstructor.ingredients);
  const loading = useSelector(state => state.orderConstructor.loading);

  const totalPrice = useMemo(() => {
    let sum = 0;
    data.forEach((i) => {
      sum += i.price;
      if (i.type === "bun") {
        sum += i.price;
      }
    });
    return sum;
  }, [data]);

  const onClick = () => {
    if (isLoggedIn()) {
      dispatch(order(data.map((item) => item._id))).then(() =>
        dispatch(openOrderModal())
      );
    } else {
      history.push("/login");
    }
  };

  return (
    <section className={`${burgerConstructorStyle.wrapper} ml-10`}>
      <Constructor data={data} />
      <div className={`${burgerConstructorStyle.total} pr-4 pb-10`}>
        <FullPrice price={Number(totalPrice)} />
        <ButtonLarge 
          text={"Оформить заказ"}
          loadingText={"Заказ оформляется..."}
          loading={loading}
          onClick={onClick} 
        />
      </div>
    </section>
  );
}
