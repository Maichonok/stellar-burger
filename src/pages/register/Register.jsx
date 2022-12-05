import {
  Input,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import registerStyles from "./Register.module.css";


export function Register() {
  return (
    <section className={registerStyles.content_box}>
      <form className={registerStyles.wrapper}>
        <p className="text text_type_main-medium">Регистрация</p>
        <div className={`${registerStyles.input_wrapper} mt-6`}>
          <Input placeholder="Имя" type="text" />
        </div>
        <div className="mt-6">
          <Input placeholder="E-mail" name={"email"} type="email" />
        </div>
        <div className="mt-6">
          <Input placeholder="Пароль" name={"pass"} type="password" />
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
