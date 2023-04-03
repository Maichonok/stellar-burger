import React, { FC, ReactNode, RefObject } from "react";
import ingredientWrapperStyle from "./IngredientWrapper.module.css";

export const IngredientWrapper: FC<{
  text: string;
  children: ReactNode;
  tabRef: (el: HTMLElement) => void;
  tabTopRef: RefObject<any>;
}> = (props) => {
  return (
    <article ref={props.tabRef}>
      <h2
        ref={props.tabTopRef}
        className={`${ingredientWrapperStyle.subtitle} text text_type_main-medium pb-2 pt-5`}
      >
        {props.text}
      </h2>
      <ul className={`${ingredientWrapperStyle.itemList}`}>{props.children}</ul>
    </article>
  );
};
