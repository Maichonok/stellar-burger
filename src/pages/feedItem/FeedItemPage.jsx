import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { FeedDetails } from "../../components/FeedDetails/FeedDetails";
import FeedItemPageStyles from "../feedItem/FeedItemPage.module.css";
import {
  wsConnectedStart,
  wsConnectedClosed,
} from "../../services/actions/wsActions";

export const ItemOfFeed = () => {
  const dispatch = useDispatch();
  let socketConnect = useRef(false);

  useEffect(() => {
    if (!socketConnect.current) {
      dispatch(wsConnectedStart());
    }
    return () => {
      if (socketConnect.current) {
        dispatch(wsConnectedClosed());
      }
      socketConnect.current = true;
    }
  }, []);

  return (
    <div className={FeedItemPageStyles.content_box}>
      <FeedDetails />
    </div>
  );
};
