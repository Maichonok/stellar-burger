import React from "react";
import orderDetailsStyle from "./OrderDetails.module.css";
import doneImg from "../../images/done.svg";
import PropTypes from "prop-types";

function OrderDetails(props) {
  return (
    <div className={`${orderDetailsStyle.wrapper}  pr-25 pl-25`}>
      <p
        className={`${orderDetailsStyle.text} text text_type_digits-large pt-15 pb-8`}
      >
        {props.orderNumber}
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
    </div>
  );
}

OrderDetails.propTypes = {
  orderNumber: PropTypes.number
}

export { OrderDetails };
