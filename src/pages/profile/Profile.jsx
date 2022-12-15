import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import profileStyles from "./Profile.module.css";
import {
  getUser,
  setUserData,
  saveUser,
  resetUser,
  logout
} from "../../services/actions/authentication";

export function Profile() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const onChange = (e) => {
    dispatch(setUserData({ [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(saveUser(user));
  };

  const onCancel = () => {
    dispatch(resetUser());
  };

  const onLogout = () => {
    dispatch(logout());
  }

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

      <form
        className={`${profileStyles.inputs_wrapper} ml-15`}
        onSubmit={onSubmit}
      >
        {error && (
          <p className="text text_type_main-medium pb-15">Error: {error}</p>
        )}
        <div className={profileStyles.input}>
          <Input
            size="default"
            placeholder="Имя"
            icon={"EditIcon"}
            name="name"
            type="text"
            value={user.name}
            onChange={onChange}
          />
        </div>
        <div className="mt-6">
          <Input
            placeholder="Логин"
            icon={"EditIcon"}
            name="email"
            type="email"
            value={user.email}
            onChange={onChange}
          />
        </div>
        <div className="mt-6">
          <Input
            placeholder="Пароль"
            icon={"EditIcon"}
            name="password"
            type="password"
            value={user.password}
            onChange={onChange}
          />
        </div>
        <div className={`${profileStyles.buttons_wrapper} mt-6`}>
          <Button htmlType="button" onClick={onCancel}>
            Отмена
          </Button>
          <Button htmlType="submit">Сохранить</Button>
        </div>
      </form>
    </section>
  );
}
