import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

const NonAuthenticated = ({ children, ...rest }) => {
  const allow = localStorage.getItem("accessToken") === null;

  return (
    <ProtectedRoute allow={allow} redirectUrl="/" {...rest}>
      {children}
    </ProtectedRoute>
  );
};
export default NonAuthenticated;
