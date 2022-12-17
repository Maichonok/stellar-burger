import React from "react";
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
import { IngredientDetails } from "./components/IngredientDetails/IngredientDetails";
import "./index.css";

export const Wrapper = () => {
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
          <IngredientDetails />
        </Route>
      </Switch>
    </div>
  );
};
