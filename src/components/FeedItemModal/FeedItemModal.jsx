import React from "react";
import { useHistory } from "react-router-dom";
import Modal from "../Modal/Modal";
import { FeedDetails } from "../FeedDetails/FeedDetails";

export const FeedItemModal = (props) => {
  let history = useHistory();

  let back = (e) => {
    history.goBack();
  };

  return (
    <Modal isOpen close={back}>
      <FeedDetails />
    </Modal>
  );
};
