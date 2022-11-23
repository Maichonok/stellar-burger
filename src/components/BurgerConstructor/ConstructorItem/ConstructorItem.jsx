import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useDrag, useDrop } from 'react-dnd'
import {
  ConstructorElement,
  DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorItemStyle from "./ConstructorItem.module.css";
import { dragTypes } from "../../../utils/dragTypes";

export default function ConstructorItem(props) {
  const [{ isDragging }, dragRef] = useDrag({
    type: dragTypes.CONSTRUCTOR_INGREDIENT,
    item: { index: props.index },
    collect: monitor => ({
        isDragging: monitor.isDragging(),
    }),
  });

  const ref = useRef(null)

   // useDrop - the list item is also a drop area
   const [spec, dropRef] = useDrop({
    accept: dragTypes.CONSTRUCTOR_INGREDIENT,
    hover: (item, monitor) => {
        const dragIndex = item.index
        const hoverIndex = props.index
        const hoverBoundingRect = ref.current?.getBoundingClientRect()
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

        if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
        if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

        props.moveListItem(dragIndex, hoverIndex)
        item.index = hoverIndex
    }
  })

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
        ref={dragDropRef} 
        className={burgerConstructorItemStyle.dragIconWrapper}>
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
}

ConstructorItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  delete: PropTypes.func.isRequired
};

