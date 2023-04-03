import { FormEvent } from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { register } from "../../services/actions/authentication";
import registerStyles from "./Register.module.css";
import { useForm } from "../../hooks/useForm";

import { useDispatch, useSelector } from "../../services/models";

export function Register() {
  const dispatch = useDispatch();

  const { values, handleChange } = useForm({
    email: "",
    password: "",
    name: "",
  });

  const error = useSelector((state) => state.auth.error);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(values.name, values.email, values.password));
  };

  return (
    <section className={registerStyles.content_box}>
      <form className={registerStyles.wrapper} onSubmit={onSubmit}>
        <p className="text text_type_main-medium">Регистрация</p>
        {error && <p className="text text_type_main-default">{`${error}`}</p>}
        <div className={`${registerStyles.input_wrapper} mt-6`}>
          <Input
            placeholder="Имя"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="mt-6">
          <Input
            placeholder="E-mail"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="mt-6">
          <Input
            placeholder="Пароль"
            name="password"
            type="password"
            icon={"ShowIcon"}
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="mt-6">
          <Button htmlType="submit">Зарегистрироваться</Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Уже зарегистрированы?{" "}
          <Link className="text text_type_main-default" to="/login">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}
