import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

import profileFormStyles from "./ProfileForm.module.css";
import {
  getUser,
  setUserData,
  saveUser,
  resetUser,
} from "../../services/actions/authentication";

export const ProfileForm = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);
  const showButtons = useSelector((state) => state.auth.showButtons);

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
  return (
    <form
      className={`${profileFormStyles.inputs_wrapper} ml-15`}
      onSubmit={onSubmit}
    >
      {error && (
        <p className="text text_type_main-medium pb-15">Error: {error}</p>
      )}
      <div className={profileFormStyles.input}>
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
      {showButtons && (
        <>
          <div className={`${profileFormStyles.buttons_wrapper} mt-6`}>
            <Button htmlType="button" onClick={onCancel}>
              Отмена
            </Button>
            <Button htmlType="submit">Сохранить</Button>
          </div>
        </>
      )}
    </form>
  );
};
