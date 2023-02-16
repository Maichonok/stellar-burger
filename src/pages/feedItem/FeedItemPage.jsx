import React from "react";
import { FeedDetails } from "../../components/FeedDetails/FeedDetails";
import FeedItemPageStyles from "../feedItem/FeedItemPage.module.css";

export const ItemOfFeed = () => {
  return (
    <div className={FeedItemPageStyles.content_box}>
      <FeedDetails />
    </div>
  );
};
