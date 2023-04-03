import { FormEvent } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { resetPass } from "../../services/actions/authentication";
import resetStyles from "./Reset.module.css";
import { useForm } from "../../hooks/useForm";

import { useDispatch, useSelector } from "../../services/models";

export function Reset() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { values, handleChange } = useForm({
    password: "",
    code: "",
  });
  const error = useSelector((state) => state.auth.error);
  const recoveryEmail = useSelector((state) => state.auth.recoveryEmail);

  if (!recoveryEmail) {
    history.push("/forgot-password");
  }

  function submitReset(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    dispatch(resetPass(values.password, values.code));
  }

  return (
    <section className={resetStyles.content_box}>
      <form className={resetStyles.wrapper} onSubmit={submitReset}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        {error && <p className="text text_type_main-default">{`${error}`}</p>}
        <div className={`${resetStyles.input_wrapper} mt-6`}>
          <Input
            placeholder="Введите новый пароль"
            name="password"
            type="password"
            onChange={handleChange}
            value={values.password}
            icon={"ShowIcon"}
          />
        </div>
        <div className="mt-6">
          <Input
            placeholder="Введите код из письма"
            name="code"
            type="text"
            onChange={handleChange}
            value={values.code}
          />
        </div>
        <div className="mt-6">
          <Button htmlType="submit">Сохранить</Button>
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
