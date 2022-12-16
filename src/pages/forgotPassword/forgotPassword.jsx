import { useState } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  forgotPass,
  setRecoveryEmail,
} from "../../services/actions/authentication";
import registerStyles from "../register/Register.module.css";

export function ForgotPassword() {
  const history = useHistory();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const email = useSelector((state) => state.auth.recoveryEmail);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPass(email)).then(() => history.push("/reset-password"));
  };

  const onChange = (e) => {
    dispatch(setRecoveryEmail(e.target.value));
  };

  return (
    <section className={registerStyles.content_box}>
      <form className={registerStyles.wrapper} onSubmit={onSubmit}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        {error && <p className="text text_type_main-default">{`${error}`}</p>}
        <div className={`${registerStyles.input_wrapper} mt-6`}>
          <Input
            placeholder="Укажите e-mail"
            name="email"
            type="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="mt-6">
          <Button htmlType="submit">Восстановить</Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Вспомнили пароль?{" "}
          <Link className="text text_type_main-default" to="/login">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}
