import React, { FC } from "react";
import modalOverlayStyle from "./ModalOverlay.module.css";

export const ModalOverlay: FC<{ close: () => void }> = (props) => {
  return (
    <div className={modalOverlayStyle.overlay} onClick={props.close}></div>
  );
};
