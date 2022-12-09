import {
  Button,
  Input
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import resetStyles from "./Reset.module.css";

export function Reset() {
  return (
    <section className={resetStyles.content_box}>
      <form className={resetStyles.wrapper} >
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <div className={`${resetStyles.input_wrapper} mt-6`}>
          <Input
            placeholder="Введите новый пароль"
            name="pass"
            type="password"
          />
        </div>
        <div className="mt-6">
          <Input
            placeholder="Введите код из письма"
            name="code"
            type="text"
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
