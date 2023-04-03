import React, { FC, ReactNode } from "react";

export const IngredientSection: FC<{
  sectionStyle: string;
  children: ReactNode;
}> = (props) => {
  return <section className={props.sectionStyle}>{props.children}</section>;
};
