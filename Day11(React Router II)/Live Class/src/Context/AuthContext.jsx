import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const HandleAuth = (state) => {
    setIsAuth(state);
  };

  return (
    <AuthContext.Provider value={{ isAuth, HandleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
