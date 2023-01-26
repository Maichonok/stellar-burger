import React from "react";
import { useSelector } from "react-redux";
import orderDetailsStyle from "./OrderDetails.module.css";
import doneImg from "../../images/done.svg";

function OrderDetails() {
  const orderNumber = useSelector(
    (state) => state.orderDetails.data.order.number
  );
  const error = useSelector((state) => state.orderDetails.error);
  
  return (
    <div className={`${orderDetailsStyle.wrapper}  pr-25 pl-25`}>
      {error && (
        <>
          <p className="text text_type_main-medium pb-15">
            Error:
          </p>
          <p className="text text_type_main-medium pb-15">
            {error}
          </p>
        </>
      )}
      {!error && (
        <>
          <p
            className={`${orderDetailsStyle.text} text text_type_digits-large pt-15 pb-8`}
          >
            {orderNumber}
          </p>
          <p
            className={`${orderDetailsStyle.text} text text_type_main-medium pb-15`}
          >
            идентификатор заказа
          </p>
          <img
            src={doneImg}
            alt="Иконка подтверждения"
            className={`${orderDetailsStyle.img} pb-15`}
          />
          <p
            className={`${orderDetailsStyle.text} text text_type_main-default pb-2`}
          >
            ваш заказ начали готовить
          </p>
          <p
            className={`${orderDetailsStyle.text} text text_type_main-default text_color_inactive pb-30`}
          >
            дождитесь ответа от орбитальной станции
          </p>
        </>
      )}
    </div>
  );
}

export { OrderDetails };
