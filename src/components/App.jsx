import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import { Main } from "./Main/Main";
import { Login } from "../pages/login/Login";
import { Profile } from "../pages/profile/Profile";
import { Register } from "../pages/register/Register";
import { RestorePassword } from "../pages/restorePassword/RestorePassword";
import { Reset } from "../pages/reset/Reset";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Header from "./Headers/AppHeader";
import { Feed } from "./Feed/OrderFeed";
import { Ingredients } from "../pages/ingredients/IngredientsPage";
import { getIngredients } from "../services/actions/burgerIngredients";
import { IngredientsModal } from "./ingredientsModal/IngredientsModal";
import { OrderHistory } from "./OrderHistory/OrderHistory";
import "../index.css";
import { FeedItem } from "./FeedItem/FeedItem";

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
        <ProtectedRoute path="/login">
          <Login />
        </ProtectedRoute>
        <ProtectedRoute onlyForAuth path="/profile">
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute onlyForAuth path="/profile/orders">
          <OrderHistory />
        </ProtectedRoute>
        <ProtectedRoute path="/register">
          <Register />
        </ProtectedRoute>
        <ProtectedRoute path="/forgot-password">
          <RestorePassword />
        </ProtectedRoute>
        <ProtectedRoute path="/reset-password">
          <Reset />
        </ProtectedRoute>
        <Route path="/feed">
          <Feed />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        {/* show full page*/}
        <Route path="/ingredients/:id">
          <Ingredients />
        </Route>
        <Route path="/feed/:id">
          <FeedItem />
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
