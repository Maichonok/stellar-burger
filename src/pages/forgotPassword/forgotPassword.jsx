import {
  Button,
  Input
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import registerStyles from "../register/Register.module.css";

export function Forgot() {
  return (
    <section className={registerStyles.content_box}>
      <form className={registerStyles.wrapper}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <div className={`${registerStyles.input_wrapper} mt-6`}>
          <Input placeholder="Укажите e-mail" name="email" type="email" />
        </div>
        <div className="mt-6">
          <Button>Восстановить</Button>
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
