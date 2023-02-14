import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { OrderItems } from "../OrderItems/OrderItems";
import profileOrdersStyles from "./ProfileOrders.module.css";

export function ProfileOrders() {
  const orders = useSelector((store) => store.wsUserReducer.orders).sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const location = useLocation();
  return (
    <div>
      <ul className={profileOrdersStyles.wrapper}>
        {orders.map((el, index) => (
          <li key={index}>
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
