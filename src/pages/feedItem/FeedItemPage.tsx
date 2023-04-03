import React, { useEffect, useRef } from "react";
import { FeedDetails } from "../../components/FeedDetails/FeedDetails";
import FeedItemPageStyles from "../feedItem/FeedItemPage.module.css";
import {
  wsConnectedStart,
  wsConnectedClosed,
} from "../../services/actions/wsActions";

import { useDispatch } from "../../services/models";

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
