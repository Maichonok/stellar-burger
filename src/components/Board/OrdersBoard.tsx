import { useSelector } from "../../services/models/index";
import boardStyles from "./OrdersBoard.module.css";

export function OrdersBoard() {
  const orders = useSelector((store) => store.wsReducer.orders);
  const total = useSelector((store) => store.wsReducer.total);
  const totalToday = useSelector((store) => store.wsReducer.totalToday);
  const doneArray = orders.filter((el) => el.status === "done");
  const pendingArray = orders.filter((el) => el.status === "pending");

  return (
      <div>
        <div className={boardStyles.status_container}>
          <div className={boardStyles.ready_wrapper}>
            <p className={` text text_type_main-medium`}>Готовы:</p>
            <ul className={boardStyles.ready_list}>
              {doneArray.map(el => (
                <li
                  key={el._id}
                  className={`${boardStyles.ready_digits} text text_type_digits-default mt-2`}
                >
                  <p className="text text_type_digits-default mt-2">{el.number}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={`${boardStyles.pending} text text_type_main-medium`}>
              В работе:
            </p>
            <ul className={boardStyles.ready_list}>
              {pendingArray.map(el => (
                <li key={el._id}>
                  <p className="text text_type_digits-default mt-2">
                    {el.number}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p className="text text_type_main-medium mt-15">
            Выполнено за всё время:
          </p>
          <p
            className={`${boardStyles.total_digits} text text_type_digits-large`}
          >
            {total}
          </p>
          <p className="text text_type_main-medium mt-15">
            Выполнено за сегодня:
          </p>
          <p
            className={`${boardStyles.total_digits} text text_type_digits-large`}
          >
            {totalToday}
          </p>
        </div>
      </div>
  );
}
