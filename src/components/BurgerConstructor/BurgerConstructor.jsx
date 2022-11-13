import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";
import burgerConstructorStyle from "./BurgerConstructor.module.css";
import { Constructor } from "./Constructor/Constructor";
import { ButtonLarge } from "./ButtonLarge/ButtonLarge";
import { FullPrice } from "./FullPrice/FullPrice";
import IngredientsContext from "../../context/ingredientsContext";

export default function BurgerConstructor(props) {
  const data = useContext(IngredientsContext);

  const totalPrice = useMemo(
    () => data.reduce((result, item) => result + item.price, 0),
    [data]
  );

  return (
    <section className={`${burgerConstructorStyle.wrapper} ml-10`}>
      <Constructor data={data} />
      <div className={`${burgerConstructorStyle.total} pr-4 pb-10`}>
        <FullPrice price={Number(totalPrice)} />
        <ButtonLarge text={"Оформить заказ"} open={props.open} />
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  open: PropTypes.func.isRequired,
};
