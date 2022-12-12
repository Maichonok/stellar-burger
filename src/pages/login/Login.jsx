import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../services/actions/authentication";
import loginStyles from "./Login.module.css";

export function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const error = useSelector(state => state.auth.error);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, pass));
  };

  function onChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function onChangePass(evt) {
    setPass(evt.target.value);
  }
  return (
    <section className={loginStyles.content_box}>
      <form className={loginStyles.wrapper} onSubmit={onSubmit}>
        <p className="text text_type_main-medium">Вход</p>
        {error && (
          <p className="text text_type_main-default">{`${error}`}</p>
        )}
        <div className="mt-6">
          <Input
            name="email"
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div className="mt-6">
          <Input
            name="pass"
            placeholder="Пароль"
            type="password"
            icon={"ShowIcon"}
            value={pass}
            onChange={onChangePass}
          />
        </div>
        <div className="mt-6">
          <Button htmlType="submit">Войти</Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Вы - новый пользователь?
          <Link
            className={`${loginStyles.link}"text text_type_main-default"`}
            to="/register"
          >
            {" "}
            Зарегистрироваться
          </Link>
        </p>
        <p className="text text_type_main-default text_color_inactive mt-4">
          Забыли пароль?{" "}
          <Link className="text text_type_main-default" to="/forgot-password">
            Восстановить пароль
          </Link>
        </p>
      </form>
    </section>
  );
}
