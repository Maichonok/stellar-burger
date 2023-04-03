import React, { FC } from "react";

export const IngredientsTitle: FC<{
  textStyle: string;
  text: string;
}> = (props) => {
  return <h1 className={props.textStyle}>{props.text}</h1>;
};
