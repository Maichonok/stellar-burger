import React from "react";
import PropTypes from "prop-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerFullPriceStyle from "./FullPrice.module.css";

const FullPrice = (props) => {
  return (
    <div className={`${burgerFullPriceStyle.fullPrice} pr-2`}>
      <p className="text text_type_digits-medium pr-2 pl-2">{props.price}</p>
      <CurrencyIcon />
    </div>
  );
};

FullPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

export { FullPrice };
