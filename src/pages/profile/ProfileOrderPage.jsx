import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { OrderInfo } from "../../components/OrderInfo/OrderInfo";
import FeedItemPageStyles from "../feedItem/FeedItemPage.module.css";
import {
  wsUserConnectedStart,
  wsUserConnectedClosed,
} from "../../services/actions/wsUserActions";

export const ProfileOrderPage = () => {
  const dispatch = useDispatch();

  let socketConnect = useRef(false);

  useEffect(() => {
    if (!socketConnect.current) {
      dispatch(wsUserConnectedStart());
    }
    return () => {
      if (socketConnect.current) {
        dispatch(wsUserConnectedClosed());
      }
      socketConnect.current = true;
    };
  }, []);

  return (
    <div className={FeedItemPageStyles.content_box}>
      <OrderInfo />
    </div>
  );
};
