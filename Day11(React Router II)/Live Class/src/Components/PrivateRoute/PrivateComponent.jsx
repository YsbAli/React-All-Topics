import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const PrivateComponent = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" replace={false} />;      // this replace is before login,,, login korar agey, back korley previous page a chole asbe...
  }
  // true means user can go to previous page and false means user can't go to previous page
  return children;
};
