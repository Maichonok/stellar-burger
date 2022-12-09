import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import resetStyles from "./Reset.module.css";
import { resetPassword } from "../../utils/api";

export function Reset() {
  const [pass, setPass] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);

  function onChangePass(evt) {
    setPass(evt.target.value);
  }

  function onChangeCode(evt) {
    setCode(evt.target.value);
  }

  function submitReset(evt) {
    evt.preventDefault();
    setError(null);
    resetPassword(pass, code).catch((e) => setError(e));
  }

  return (
    <section className={resetStyles.content_box}>
      <form className={resetStyles.wrapper} onSubmit={submitReset}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        {error && <p className="text text_type_main-default">{`Ошибка: ${error}`}</p>}
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
