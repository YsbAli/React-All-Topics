import { createContext } from "react";

const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  return (
    <>
      <LanguageContext.Provider val ue={"en"}>
        {children}
      </LanguageContext.Provider>
    </>
  );
};
