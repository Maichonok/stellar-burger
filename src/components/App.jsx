import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import { Main } from "./Main/Main";
import { Login } from "../pages/login/Login";
import { Profile } from "../pages/profile/Profile";
import { Register } from "../pages/register/Register";
import { ForgotPassword } from "../pages/forgotPassword/ForgotPassword";
import { Reset } from "../pages/reset/Reset";
import Authenticated from "./Authenticated";
import NonAuthenticated from "./NonAuthenticated";
import Header from "./Headers/AppHeader";
import { Ingredients } from "../pages/ingredients/IngredientsPage";
import { getIngredients } from "../services/actions/burgerIngredients";
import { IngredientsModal } from "./ingredientsModal/IngredientsModal";
import "../index.css";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div>
      <Header />
      <Switch location={background || location}>
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
        {/* show full page*/}
        <Route path="/ingredients/:id">
          <Ingredients />
        </Route>
      </Switch>

      {/* show modal */}
      {background && (
        <Route path="/ingredients/:id">
          <IngredientsModal />
        </Route>
      )}
    </div>
  );
};
