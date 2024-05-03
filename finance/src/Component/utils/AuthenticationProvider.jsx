import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const AuthenticationProvider = (props) => {
  const auth = useAuth();

  if (auth.user) {
    return <>{props.children}</>;
  } else {
    return <Navigate to='/about' />;
  }
};
