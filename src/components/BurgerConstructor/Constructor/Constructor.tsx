import React, { FC } from "react";
import { useDrop } from "react-dnd";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import constructorStyle from "./Constructor.module.css";
import ConstructorItem from "../ConstructorItem/ConstructorItem";
import { dragTypes } from "../../../utils/dragTypes";
import {
  addIngredient,
  deleteIngredient,
  moveIngredient,
} from "../../../services/actions/burgerConstructor";
import { useDispatch } from "../../../services/models";
import { TIngredient } from "../../../services/models/ingredients";

interface Props {
  data: Array<TIngredient>;
}

const Constructor: FC<Props> = (props) => {
  const dispatch = useDispatch();

  const newData = props.data;
  const ingredients = newData.filter((i) => i.type !== "bun");
  const bun = newData.find((i) => i.type === "bun");

  const [isOver, dropRef] = useDrop({
    accept: dragTypes.CARD,
    drop: (args: any) => {
      args as { data: string };
      dispatch(addIngredient(args["data"]));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const onDelete = (id: string) => {
    dispatch(deleteIngredient(id));
  };

  const moveListItem = (dragIndex: number, hoverIndex: number) => {
    const dragItem = ingredients[dragIndex];
    const hoverItem = ingredients[hoverIndex];
    const actualDragIndex = props.data.findIndex(
      (i) => dragItem.uuid === i.uuid
    );
    const actualHoverIndex = props.data.findIndex(
      (i) => hoverItem.uuid === i.uuid
    );

    const actualDragItem = props.data[actualDragIndex];
    const actualHoverItem = props.data[actualHoverIndex];

    const sorted = [...props.data];
    sorted[actualDragIndex] = actualHoverItem;
    sorted[actualHoverIndex] = actualDragItem;

    dispatch(moveIngredient(sorted));
  };

  const opacity = isOver ? 0.3 : 1;

  return (
    <div
      className={constructorStyle.container}
      ref={dropRef}
      style={{ opacity }}
    >
      {!bun && (
        <div className={constructorStyle.emptyBuns}>
          <p className={constructorStyle.emptyTitle}>Перетащите булочку сюда</p>
        </div>
      )}
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
      {bun && newData.length > 0 && (
        <ul className={constructorStyle.itemList}>
          {ingredients.map((element, index) => (
            <ConstructorItem
              key={element.uuid}
              name={element.name}
              price={element.price}
              image={element.image}
              uid={element.uuid}
              index={index}
              moveListItem={moveListItem}
              delete={onDelete}
            />
          ))}
        </ul>
      )}
      {bun && newData.length === 0 && (
        <div className={constructorStyle.emptyIngredients}>
          <p className={constructorStyle.emptyTitle}>
            Перетащите ингредиенты сюда
          </p>
        </div>
      )}
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

export { Constructor };
