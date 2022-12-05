import {
  Button,
  Input
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

import loginStyles from "./Login.module.css";

export function Login() {
  return (
    <section className={loginStyles.content_box}>
      <form className={loginStyles.wrapper}>
        <p className="text text_type_main-medium">Вход</p>
        <div className="mt-6">
          <Input
            name="email"
            placeholder="E-mail"
            type="email"
          />
        </div>
        <div className="mt-6">
          <Input
            name="pass"
            placeholder="Пароль"
            type="password"
          />
        </div>
        <div className="mt-6">
          <Button>Войти</Button>
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
