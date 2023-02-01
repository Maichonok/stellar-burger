import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ProfileOrderItem } from "../../components/ProfileOrderItem/ProfileOrderItem";
import FeedItemPageStyles from "../feedItem/FeedItemPage.module.css";
import { wsConnectedStart } from "../../services/actions/wsActions";

export const ProfileOrderPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(wsConnectedStart());
  }, []);

  return (
    <div className={FeedItemPageStyles.content_box}>
       <ProfileOrderItem />
    </div>
  );
};