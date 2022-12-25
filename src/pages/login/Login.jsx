import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { login } from "../../services/actions/authentication";
import loginStyles from "./Login.module.css";
import { useForm } from "../../hooks/useForm";

export function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { values, handleChange } = useForm({
    password: "",
    email: "",
  });

  const error = useSelector((state) => state.auth.error);

  const redirectURL = location.state ? location.state.prevLocation : "/";

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(values.email, values.password)).then(() => {
      history.push(redirectURL);
    });
  };

  return (
    <section className={loginStyles.content_box}>
      <form className={loginStyles.wrapper} onSubmit={onSubmit}>
        <p className="text text_type_main-medium">Вход</p>
        {error && <p className="text text_type_main-default">{`${error}`}</p>}
        <div className="mt-6">
          <Input
            name="email"
            placeholder="E-mail"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="mt-6">
          <Input
            name="password"
            placeholder="Пароль"
            type="password"
            icon={"ShowIcon"}
            value={values.password}
            onChange={handleChange}
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
