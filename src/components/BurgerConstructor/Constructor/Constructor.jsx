import React from "react";
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux'
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import constructorStyle from "./Constructor.module.css";
import ConstructorItem from "../ConstructorItem/ConstructorItem";
import { ingredientType } from "../../../utils/ingredient";
import PropTypes from "prop-types";
import { dragTypes } from "../../../utils/dragTypes";
import { addIngredient, deleteIngredient, moveIngredient } from "../../../services/actions/constructor";

const Constructor = (props) => {
  const dispatch = useDispatch();

  const ordered = [];
  props.data.forEach(i => {
    const index = ordered.findIndex(o => o._id === i._id);
    if (index < 0) {
      ordered.push({...i});
    } else {
      ordered[index].price += i.price;
    }
  });
  const newData = ordered;
  const ingredients = newData.filter(i => i.type !== 'bun');
  const bun = newData.find(i => i.type === 'bun');

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

  const moveListItem = (dragIndex, hoverIndex) => {
    const dragItem = ingredients[dragIndex];
    const hoverItem = ingredients[hoverIndex];
    const actualDragIndex = props.data.findIndex(i => dragItem._id === i._id);
    const actualHoverIndex = props.data.findIndex(i => hoverItem._id === i._id);

    const actualDragItem = props.data[actualDragIndex]
    const actualHoverItem = props.data[actualHoverIndex]
    
    const sorted = [...props.data]
    sorted[actualDragIndex] = actualHoverItem;
    sorted[actualHoverIndex] = actualDragItem;

    dispatch(moveIngredient(sorted));
  }

  const opacity = isOver ? 0.3 : 1;

  return (
    <div className={constructorStyle.container} 
      ref={dropRef} 
      style={{ opacity }}
    >
      {
        !bun && (
          <div className={constructorStyle.emptyBuns}>
            <p className={constructorStyle.emptyTitle}>
              Перетащите булочку сюда
            </p>
          </div>
        )
      }
      {bun && (
        <div className={`${constructorStyle.topElement}`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name + "(верх)"}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      )}
      {
        bun && newData.length > 0 && (
          <ul className={constructorStyle.itemList}>
            {ingredients.map((element, index) => (
              <ConstructorItem
                key={element._id}
                name={element.name}
                price={element.price}
                image={element.image}
                uid={element._id}
                index={index}
                moveListItem={moveListItem}
                delete={onDelete}
              />
            ))}
          </ul>
        )
      }
      {
        bun && newData.length === 0 && (
          <div className={constructorStyle.emptyIngredients}>
            <p className={constructorStyle.emptyTitle}>
              Перетащите ингредиенты сюда
            </p>
          </div>
        )
      }
      {bun && (
        <div className={`${constructorStyle.endElement} pt-3`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun.name + "(низ)"}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>     
      )}
    </div>
  );
};

Constructor.propTypes = {
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
};

export { Constructor };
