import React, { FC } from "react";
import { useDrag } from "react-dnd";
import cardStyle from "./Card.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { dragTypes } from "../../../utils/dragTypes";
import { TIngredient } from "../../../services/models/ingredients";

export const Card: FC<{
  image: string;
  name: string;
  price: number;
  count: number | undefined;
  data: TIngredient;
}> = (props) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: dragTypes.CARD,
    item: { data: props.data },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const opacity = isDragging ? 0.3 : 1;
  const cursor = isDragging ? "grabbing" : "pointer";

  return (
    <div
      className={cardStyle.cardWrapper}
      ref={dragRef}
      style={{ opacity, cursor }}
    >
      <img src={props.image} alt={props.name} className={cardStyle.cardImage} />
      <div className={`${cardStyle.cardPrice} pt-1 pb-1`}>
        <p className="text text_type_digits-default mr-2">{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className="text text_type_main-default pb-10 pt-1">{props.name}</h3>
      {!!props.count && <Counter count={props.count} size="default" />}
    </div>
  );
};
