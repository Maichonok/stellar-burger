import React from "react";
import { IntlProvider } from "react-intl";
import { useHistory } from "react-router-dom";
import Modal from "../Modal/Modal";
import { FeedDetails } from "../FeedDetails/FeedDetails";

export const FeedItemModal = (props) => {
  const history = useHistory();

  const back = (e) => {
    history.goBack();
  };

  return (
    <IntlProvider messages={{}} locale="ru" defaultLocale="ru">
    <Modal isOpen close={back}>
      <FeedDetails />
    </Modal>
    </IntlProvider>
  );
};
