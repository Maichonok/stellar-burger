import React, { useEffect } from "react";
import { useDispatch } from "../services/models";
import { Route, Switch, useLocation } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { Main } from "./Main/Main";
import { Login } from "../pages/login/Login";
import { Profile } from "../pages/profile/Profile";
import { Register } from "../pages/register/Register";
import { RestorePassword } from "../pages/restorePassword/RestorePassword";
import { Reset } from "../pages/reset/Reset";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import Header from "./Headers/AppHeader";
import { Feed } from "./Feed/OrderFeed";
import { Ingredients } from "../pages/ingredients/IngredientsPage";
import { ItemOfFeed } from "../pages/feedItem/FeedItemPage";
import { getIngredients } from "../services/actions/burgerIngredients";
import { IngredientsModal } from "./IngredientsModal/IngredientsModal";
import "../index.css";
import { FeedItemModal } from "./FeedItemModal/FeedItemModal";
import { ProfileOrderModal } from "./ProfileOrderModal/ProfileOrderModal";
import { ProfileOrderPage } from "../pages/profile/ProfileOrderPage";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  const location = useLocation();
  const { state } = location as any;
  const background = state && state.background;

  return (
    <div>
      <IntlProvider messages={{}} locale="ru" defaultLocale="ru">
        <Header />
        <Switch location={background || location}>
          <ProtectedRoute path="/login">
            <Login />
          </ProtectedRoute>
          <ProtectedRoute onlyForAuth path="/profile/orders/:id">
            <ProfileOrderPage />
          </ProtectedRoute>
          <ProtectedRoute onlyForAuth path="/profile">
            <Profile />
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
          <Route exact path="/">
            <Main />
          </Route>
          {/* show full page*/}
          <Route path="/ingredients/:id">
            <Ingredients />
          </Route>

          <Route path="/feed/:id">
            <ItemOfFeed />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
        </Switch>
      </IntlProvider>
      {/* show modal */}

      {background && (
        <Route path="/ingredients/:id">
          <IngredientsModal />
        </Route>
      )}

      {background && (
        <Route path="/feed/:id">
          <FeedItemModal />
        </Route>
      )}

      {background && (
        <Route path="/profile/orders/:id">
          <ProfileOrderModal />
        </Route>
      )}
    </div>
  );
};
