import React from "react";
import { useHistory } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Modal from "../Modal/Modal";
import { OrderInfo } from "../OrderInfo/OrderInfo";

export const ProfileOrderModal = (props) => {
  let history = useHistory();

  let back = (e) => {
    history.goBack();
  };

  return (
    <IntlProvider messages={{}} locale="ru" defaultLocale="ru">
      <Modal isOpen close={back}>
        <OrderInfo />
      </Modal>
    </IntlProvider>
  );
};