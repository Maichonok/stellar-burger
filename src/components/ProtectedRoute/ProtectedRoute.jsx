import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, path, ...rest }) => {
  const loggedIn = localStorage.getItem("accessToken") !== null;

  return (
    <Route
      path={path}
      {...rest}
      render={() => {
        return loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                prevLocation: path,
                error: "You need to login first!",
              },
            }}
          />
        );
      }}
    />
  );
};
export default ProtectedRoute;