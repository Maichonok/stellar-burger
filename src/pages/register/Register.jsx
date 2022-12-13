import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../services/actions/authentication";
import registerStyles from "./Register.module.css";

export function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  
  const error = useSelector(state => state.auth.error);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name, email, pass))
      .then(() => history.push("/"));
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
        {error && (
          <p className="text text_type_main-default">{`${error}`}</p>
        )}
        <div className={`${registerStyles.input_wrapper} mt-6`}>
          <Input
            placeholder="Имя"
            name="name"
            type="text"
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div className="mt-6">
          <Input
            placeholder="E-mail"
            name="email"
            type="email"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div className="mt-6">
          <Input
            placeholder="Пароль"
            name="pass"
            type="password"
            icon={"ShowIcon"}
            value={pass}
            onChange={onChangePass}
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
