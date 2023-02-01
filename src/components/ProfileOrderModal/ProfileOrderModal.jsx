import React from "react";
import { useHistory } from "react-router-dom";
import Modal from "../Modal/Modal";
import { ProfileOrderItem } from "../ProfileOrderItem/ProfileOrderItem";

export const ProfileOrderModal = (props) => {
  let history = useHistory();

  let back = (e) => {
    history.goBack();
  };

  return (
    <Modal isOpen close={back}>
    <ProfileOrderItem />
  </Modal>
  );
};
