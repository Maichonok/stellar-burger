import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetPass } from "../../services/actions/authentication";
import resetStyles from "./Reset.module.css";

export function Reset() {
  const dispatch = useDispatch();
  const [pass, setPass] = useState("");
  const [code, setCode] = useState("");
  const error = useSelector(state => state.auth.error);

  function onChangePass(evt) {
    setPass(evt.target.value);
  }

  function onChangeCode(evt) {
    setCode(evt.target.value);
  }

  function submitReset(evt) {
    evt.preventDefault();
    dispatch(resetPass(pass, code))
  }

  return (
    <section className={resetStyles.content_box}>
      <form className={resetStyles.wrapper} onSubmit={submitReset}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        {error && <p className="text text_type_main-default">{`${error}`}</p>}
        <div className={`${resetStyles.input_wrapper} mt-6`}>
          <Input
            placeholder="Введите новый пароль"
            name="pass"
            type="password"
            onChange={onChangePass}
            value={pass}
            icon={"ShowIcon"}
          />
        </div>
        <div className="mt-6">
          <Input
            placeholder="Введите код из письма"
            name="code"
            type="text"
            onChange={onChangeCode}
            value={code}
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
