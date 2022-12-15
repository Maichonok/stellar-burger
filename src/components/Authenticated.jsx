import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

const Authenticated = ({ children, ...rest }) => {
  const loggedIn = localStorage.getItem("accessToken") !== null;

  return (
    <ProtectedRoute allow={loggedIn} redirectUrl="/login" {...rest}>
      {children}
    </ProtectedRoute>
  );
};
export default Authenticated;
