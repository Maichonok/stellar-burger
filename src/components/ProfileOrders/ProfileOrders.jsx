import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  wsUserConnectedStart,
  wsUserConnectedClosed,
} from "../../services/actions/wsUserActions";
import { OrderItems } from "../OrderItems/OrderItems";
import profileOrdersStyles from "./ProfileOrders.module.css";

export function ProfileOrders() {
  const orders = useSelector((store) => store.wsUserReducer.orders).sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsUserConnectedStart());
  }, []);

  useEffect(() => () => dispatch(wsUserConnectedClosed()), []);

  const location = useLocation();
  return (
    <div>
      <ul className={profileOrdersStyles.wrapper}>
        {orders.map(el => (
          <li key={el._id}>
            <Link
              to={{
                pathname: `/profile/orders/${el._id}`,
                state: { background: location },
              }}
            >
              <OrderItems order={el} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
