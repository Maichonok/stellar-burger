import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorItemStyle from "./ConstructorItem.module.css";
import PropTypes from "prop-types";

export default function ConstructorItem(props) {
  return (
    <li className={`${burgerConstructorItemStyle.item} pt-4 pr-3`}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={props.name}
        price={props.price}
        thumbnail={props.image}
      />
    </li>
  );
}

ConstructorItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

