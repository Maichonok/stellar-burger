import { Route, Switch, useLocation, NavLink } from "react-router-dom";
import { Location } from 'history'; 
import { ProfileForm } from "../../components/ProfileForm/ProfileForm";
import { ProfileOrders } from "../../components/ProfileOrders/ProfileOrders";
import profileStyles from "./Profile.module.css";
import { logout } from "../../services/actions/authentication";

import { useDispatch } from "../../services/models";

export function Profile() {
  const dispatch = useDispatch();

  const location = useLocation<{background: Location}>();
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
              exact
            >
              Профиль
            </NavLink>
          </li>
          <li className="mt-10">
            <NavLink
              to="/profile/orders"
              className={`${profileStyles.menu_button} text text_type_main-medium`}
              activeClassName={profileStyles.active_button}
              exact
            >
              История заказов
            </NavLink>
          </li>
          <li className="mt-10">
            <NavLink
              className={`${profileStyles.menu_button} text text_type_main-medium`}
              to="/login"
              exact
            >
              <span onClick={onLogout}>Выход</span>
            </NavLink>
          </li>
        </ul>
        <p className="text text_type_main-small text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Switch location={background || location}>
        <Route exact path="/profile">
          <ProfileForm />
        </Route>
        <Route path="/profile/orders">
          <ProfileOrders />
        </Route>
      </Switch>
    </section>
  );
}