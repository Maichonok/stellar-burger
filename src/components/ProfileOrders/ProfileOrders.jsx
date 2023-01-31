import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { ProfileOrderItem } from "../ProfileOrderItem/ProfileOrderItem";
import profileOrdersStyles from "./ProfileOrders.module.css";

export function ProfileOrders() {
  const orders = useSelector((store) => store.wsUserReducer.orders);
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
            <ProfileOrderItem order={el} />
          </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}
