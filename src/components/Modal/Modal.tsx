import React, { ReactNode, FC, useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from "react-dom";
import modalStyle from "./Modal.module.css";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

const modalRoot = document.querySelector("#modal")!;

interface Props {
  close: () => void;
  text?: string;
  isOpen: boolean;
  children: ReactNode;
}

const Modal: FC<Props> = (props) => {
  const closeModal = () => {
    props.close();
  };

  useEffect(() => {
    function handleEscKeydown(evt: any) {
      if (evt.key === "Escape") {
        closeModal();
      }
    }
    if (props.isOpen) {
      document.addEventListener("keydown", handleEscKeydown);

      return () => {
        document.removeEventListener("keydown", handleEscKeydown);
      };
    }
  }, [props.isOpen]);

  return createPortal(
    <>
      <div className={modalStyle.wrapper}>
        {props.text && (
          <h3
            className={`${modalStyle.title} text text_type_main-large pt-15 pb-1 pl-10`}
          >
            {props.text}
          </h3>
        )}
        <button onClick={props.close} className={modalStyle.btnClose}>
          {<CloseIcon type="primary" />}
        </button>
        {props.children}
      </div>
      <ModalOverlay close={props.close} />
    </>,
    modalRoot
  );
};

export default Modal;
