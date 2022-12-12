import { useState } from "react";
import {
  Button,
  Input
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import registerStyles from "../register/Register.module.css";
import { restorePassword } from "../../utils/api";

export function Forgot() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = e => {
    e.preventDefault();
    setError(null);
    restorePassword(email)
      .then(() => {
        history.push("/reset-password");        
      })
      .catch(e => setError(e))
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
            onChange={e => setEmail(e.target.value)}
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
