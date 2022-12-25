import React from 'react';
import { Route, Redirect, useLocation } from "react-router-dom";
import { isLoggedIn } from '../../utils/auth';

const ProtectedRoute = ({ onlyForAuth, children, ...rest }) => {
  const isAuthorized = isLoggedIn();
  const location = useLocation();

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
export default ProtectedRoute;
