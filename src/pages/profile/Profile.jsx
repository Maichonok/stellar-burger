import { Route, Switch, useLocation, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { ProtectedRoute } from "../../components/ProtectedRoute/ProtectedRoute";
import { ProfileForm } from "../../components/ProfileForm/ProfileForm";
import { ProfileOrders } from "../../components/ProfileOrders/ProfileOrders";
import profileStyles from "./Profile.module.css";
import { logout } from "../../services/actions/authentication";

export function Profile() {
  const dispatch = useDispatch();

  const location = useLocation();
  const background = location.state && location.state.background;

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <section className={profileStyles.content_box}>
      <div className={profileStyles.menu_wrapper}>
        <ul className={profileStyles.menu_list}>
          <li>
            <NavLink
              to="/profile"
              className={`${profileStyles.menu_button} text text_type_main-medium`}
              activeClassName={profileStyles.active_button}
            >
              Профиль
            </NavLink>
          </li>
          <li className="mt-10">
            <NavLink
              to="/profile/orders"
              className={`${profileStyles.menu_button} text text_type_main-medium`}
              activeClassName={profileStyles.active_button}
            >
              История заказов
            </NavLink>
          </li>
          <li className="mt-10">
            <NavLink
              className={`${profileStyles.menu_button} text text_type_main-medium`}
              to="/login"
            >
              <span onClick={onLogout}>Выход</span>
            </NavLink>
          </li>
        </ul>
        <p className="text text_type_main-small text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Switch>
        <Route exact path="/profile">
          <ProfileForm />
        </Route>
        <Route path="/profile/orders">
          <ProfileOrders />
        </Route>
        {/* <ProtectedRoute path="/orders">
          <ProfileForm />
        </ProtectedRoute> */}
      </Switch>
    </section>
  );
}
