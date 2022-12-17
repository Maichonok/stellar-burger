import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";
import { Register } from "./pages/register/Register";
import { ForgotPassword } from "./pages/forgotPassword/ForgotPassword";
import { Reset } from "./pages/reset/Reset";
import Authenticated from "./components/Authenticated";
import NonAuthenticated from "./components/NonAuthenticated";
import Header from "./components/Headers/AppHeader";
import { Ingredients } from "./pages/ingredients/IngredientsPage";
import { getIngredients } from "./services/actions/burgerIngredients";
import "./index.css";

export const Wrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <NonAuthenticated path="/login">
          <Login />
        </NonAuthenticated>
        <Authenticated path="/profile">
          <Profile />
        </Authenticated>
        <NonAuthenticated path="/register">
          <Register />
        </NonAuthenticated>
        <NonAuthenticated path="/forgot-password">
          <ForgotPassword />
        </NonAuthenticated>
        <NonAuthenticated path="/reset-password">
          <Reset />
        </NonAuthenticated>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/ingredients/:id">
          <Ingredients />
        </Route>
      </Switch>
    </div>
  );
};
