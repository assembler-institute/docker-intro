import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks";

export const ProtectedRoute = ({ children }) => {
  const { authState } = useAuthContext();
  const { user } = authState;

  if (!user) return <Navigate to="/" replace />;

  return children;
};
