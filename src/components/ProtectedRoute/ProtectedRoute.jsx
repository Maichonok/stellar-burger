import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, path, allow, redirectUrl, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={() => {
        return allow ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: redirectUrl,
              state: {
                prevLocation: path,
              },
            }}
          />
        );
      }}
    />
  );
};
export default ProtectedRoute;
