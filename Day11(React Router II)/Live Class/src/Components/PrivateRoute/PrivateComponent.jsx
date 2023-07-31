import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const PrivateComponent = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};
