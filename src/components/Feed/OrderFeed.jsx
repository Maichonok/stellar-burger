import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { OrderItems } from "../OrderItems/OrderItems";
import { OrdersBoard } from "../Board/OrdersBoard";
import feedStyles from "./OrderFeed.module.css";
import {
  wsConnectedStart,
  wsConnectedClosed,
} from "../../services/actions/wsActions";

export function Feed() {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.wsReducer.orders);
  const ingredients = useSelector((store) => store.burgerIngredients.data);
  const location = useLocation();

  useEffect(() => {
    dispatch(wsConnectedStart());
    return () => dispatch(wsConnectedClosed());
  }, []);
 
  return (
    <section className={feedStyles.feed_section}>
      <h2 className="text text_type_main-large mt-10">Лента заказов</h2>
      <div className={feedStyles.content_wrapper}>
        <div className={`${feedStyles.scroll_box} mr-15`}>
          <ul className={`${feedStyles.content_list}`}>
            {orders.map((order) => (
              <li key={order._id}>
                <Link
                  to={{
                    pathname: `/feed/${order._id}`,
                    state: { background: location },
                  }}
                >
                  <OrderItems order={order} ingredientsData={ingredients} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <OrdersBoard />
      </div>
    </section>
  );
}
