import React, { FC } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerFullPriceStyle from "./FullPrice.module.css";

interface Props {
  price: number;
}

export const FullPrice: FC<Props> = (props) => {
  return (
    <div className={`${burgerFullPriceStyle.fullPrice} pr-2`}>
      <p className="text text_type_digits-medium pr-2 pl-2">{props.price}</p>
      <CurrencyIcon type="primary" />
    </div>
  );
};
