import React from "react";
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux'
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import constructorStyle from "./Constructor.module.css";
import ConstructorItem from "../ConstructorItem/ConstructorItem";
import { data } from "../../../utils/data";
import { ingredientType } from "../../../utils/ingredient";
import PropTypes from "prop-types";
import { dragTypes } from "../../../utils/dragTypes";
import { addIngredient, deleteIngredient } from "../../../services/actions/constructor";

const dataItemOne = data[0];

const Constructor = (props) => {
  const dispatch = useDispatch();

  const [{ isOver }, dropRef] = useDrop({
      accept: dragTypes.CARD,
      drop: ({ data }) => {
        dispatch(addIngredient(data));
      },
      collect: (monitor) => ({
          isOver: monitor.isOver()
      })
  });

  const onDelete = id => {
    dispatch(deleteIngredient(id));
  };

  const newData = props.data;

  const opacity = isOver ? 0.3 : 1;

  return (
    <div className={constructorStyle.container} 
      ref={dropRef} 
      style={{ opacity }}
    >
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
                uid={element._id}
                delete={onDelete}
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
