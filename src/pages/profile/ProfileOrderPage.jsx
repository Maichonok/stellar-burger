import React from "react";
import { OrderInfo } from "../../components/OrderInfo/OrderInfo";
import FeedItemPageStyles from "../feedItem/FeedItemPage.module.css";

export const ProfileOrderPage = () => {
  return (
    <div className={FeedItemPageStyles.content_box}>
       <OrderInfo />
    </div>
  );
};