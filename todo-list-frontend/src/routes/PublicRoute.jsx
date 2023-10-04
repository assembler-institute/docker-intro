import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks";

export const PublicRoute = ({ children }) => {
  const { authState } = useAuthContext();
  const { user } = authState;

  if (user) return <Navigate to="/main" />;

  return children;
};
