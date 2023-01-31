import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth";
import { wsUserConnectedStart } from "../../services/actions/wsUserActions";

export const ProtectedRoute = ({ onlyForAuth = false, children, ...rest }) => {
  const isAuthorized = isLoggedIn();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsUserConnectedStart());
  }, []);

  if (!onlyForAuth && isAuthorized) {
    const { from } = location.state || { from: { pathname: "/" } };
    return (
      <Route {...rest}>
        <Redirect to={from} />
      </Route>
    );
  }
  if (onlyForAuth && !isAuthorized) {
    return (
      <Route {...rest}>
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      </Route>
    );
  }
  return <Route {...rest}>{children}</Route>;
};
