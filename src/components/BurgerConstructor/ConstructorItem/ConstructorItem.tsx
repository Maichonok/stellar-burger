import React, { useRef, FC, LegacyRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorItemStyle from "./ConstructorItem.module.css";
import { dragTypes } from "../../../utils/dragTypes";

interface Props {
  image: string;
  name: string;
  price: number;
  delete: (id: string) => void;
  uid: string;
  index: number;
  moveListItem: (a: number, b: number) => void;
}

const ConstructorItem: FC<Props> = (props) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: dragTypes.CONSTRUCTOR_INGREDIENT,
    item: { index: props.index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const ref = useRef<HTMLDivElement>(null);

  // useDrop - the list item is also a drop area
  const [spec, dropRef] = useDrop({
    accept: dragTypes.CONSTRUCTOR_INGREDIENT,
    hover: (item: { index: number }, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = props.index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect() || {
        bottom: 0,
        top: 0,
      };
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      let offset = monitor.getClientOffset();
      const hoverActualY =
        offset != null ? offset.y - hoverBoundingRect.top : 0;

      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      props.moveListItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const dragDropRef = dragRef(dropRef(ref));

  return (
    <li
      className={`
        ${isDragging && burgerConstructorItemStyle.dragged}
        ${burgerConstructorItemStyle.item} 
        pt-4 pr-3
      `}
    >
      <span
        ref={dragDropRef as LegacyRef<HTMLSpanElement>}
        className={burgerConstructorItemStyle.dragIconWrapper}
      >
        <DragIcon type="primary" />
      </span>
      <ConstructorElement
        text={props.name}
        price={props.price}
        thumbnail={props.image}
        handleClose={() => props.delete(props.uid)}
      />
    </li>
  );
};

export default ConstructorItem;
