import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children: Comp, path, ...rest }) => {
  const loggedIn = useSelector(state => state.auth.loggedIn);

  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return loggedIn ? (
          <Comp {...props} />
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