import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FeedDetails } from "../../components/FeedDetails/FeedDetails";
import FeedItemPageStyles from "../feedItem/FeedItemPage.module.css";
import { wsConnectedStart, wsConnectedClosed } from "../../services/actions/wsActions";

export const ItemOfFeed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(wsConnectedStart());
  }, []);

  useEffect(() => {
    dispatch(wsConnectedClosed());
  }, []);

  return (
    <div className={FeedItemPageStyles.content_box}>
      <FeedDetails />
    </div>
  );
};