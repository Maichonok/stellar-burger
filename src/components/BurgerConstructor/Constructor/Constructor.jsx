import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import constructorStyle from "./Constructor.module.css";
import ConstructorItem from "../ConstructorItem/ConstructorItem";
import { data } from "../../../utils/data";
import { ingredientType } from "../../../utils/ingredient";
import PropTypes from "prop-types";

const dataItemOne = data[0];


const Constructor = (props) => {
const newData = props.data;
  return (
    <div className={constructorStyle.container}>
      <div className={`${constructorStyle.topElement}`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={dataItemOne.name + "(верх)"}
          price={dataItemOne.price}
          thumbnail={dataItemOne.image}
        />
      </div>
      <ul className={constructorStyle.itemList}>
        {newData.map((element) => {
          if (element.type === "sauce" || element.type === "main") {
            return (
              <ConstructorItem
                key={element._id}
                name={element.name}
                price={element.price}
                image={element.image}
              />
            );
          } else {
            return null;
          }
        })}
      </ul>
      <div className={`${constructorStyle.endElement} pt-3`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={dataItemOne.name + "(низ)"}
          price={dataItemOne.price}
          thumbnail={dataItemOne.image}
        />
      </div>
    </div>
  );
};

Constructor.propTypes = {
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
};

export { Constructor };
