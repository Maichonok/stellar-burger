import {
  Input,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { registerRequest } from "../../utils/api";
import registerStyles from "./Register.module.css";


export function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = e => {
    e.preventDefault();
    setError(null);
    registerRequest(name, email, pass)
      .catch(e => setError(e))
  };

  function onChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function onChangePass(evt) {
    setPass(evt.target.value);
  }

  function onChangeName(evt) {
    setName(evt.target.value);
  }
  return (
    <section className={registerStyles.content_box}>
      <form className={registerStyles.wrapper} onSubmit={onSubmit}>
        <p className="text text_type_main-medium">Регистрация</p>
        {error && <p className="text text_type_main-default">{`Ошибка: ${error}`}</p>}
        <div className={`${registerStyles.input_wrapper} mt-6`}>
          <Input placeholder="Имя" name="name" type="text" onChange={onChangeName}/>
        </div>
        <div className="mt-6">
          <Input placeholder="E-mail" name="email" type="email" onChange={onChangeEmail}/>
        </div>
        <div className="mt-6">
          <Input placeholder="Пароль" name="pass" type="password" icon={"ShowIcon"} onChange={onChangePass}/>
        </div>
        <div className="mt-6">
          <Button>Зарегистрироваться</Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Уже зарегистрированы?{" "}
          <Link className="text text_type_main-default" to="/login">Войти</Link>
        </p>
      </form>
    </section>
  );
}
