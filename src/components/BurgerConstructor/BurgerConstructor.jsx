import React from "react";
import { data } from "../../utils/data";
import PropTypes from "prop-types";
import burgerConstructorStyle from "./BurgerConstructor.module.css";
import { Constructor } from "./Constructor/Constructor";
import { ButtonLarge } from "./ButtonLarge/ButtonLarge";
import { FullPrice } from "./FullPrice/FullPrice";

export default function BurgerConstructor(props) {
  return (
    <section className={`${burgerConstructorStyle.wrapper} ml-10`}>
      <Constructor data={data} />
      <div className={`${burgerConstructorStyle.total} pr-4 pb-10`}>
        <FullPrice price={Number(24568)} />
        <ButtonLarge text={"Оформить заказ"} open={props.open} />
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  open: PropTypes.func.isRequired,
};
