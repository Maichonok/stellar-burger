import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import { App } from "./components/App/App";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";
import { Register } from "./pages/register/Register";
import { Forgot } from "./pages/forgotPassword/forgotPassword";
import { Reset } from "./pages/reset/Reset";
import Authenticated from "./components/Authenticated";
import NonAuthenticated from "./components/NonAuthenticated";
import Header from "./components/Headers/AppHeader";
import rootReducer from "./services/rootReducer";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
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
            <Forgot />
          </NonAuthenticated>
          <NonAuthenticated path="/reset-password">
            <Reset />
          </NonAuthenticated>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>
);
