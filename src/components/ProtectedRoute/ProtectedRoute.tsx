import React, { FC, ReactNode } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth";

interface Props {
  onlyForAuth?: boolean;
  children: ReactNode;
  path: string;
};

export const ProtectedRoute: FC<Props> = ({ onlyForAuth = false, children, ...rest }) => {
  const isAuthorized = isLoggedIn();
  const location = useLocation();

  if (!onlyForAuth && isAuthorized) {
    const { from } = location.state as any || { from: { pathname: "/" } };
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
