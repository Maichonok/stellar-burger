import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { isLoggedIn } from "../utils/auth";

const Authenticated = ({ children, ...rest }) => {
  return (
    <ProtectedRoute allow={isLoggedIn()} redirectUrl="/login" {...rest}>
      {children}
    </ProtectedRoute>
  );
};
export default Authenticated;
