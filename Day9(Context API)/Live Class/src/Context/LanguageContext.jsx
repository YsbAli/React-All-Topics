import { createContext, useState } from "react";

//LanguageContext is  box   from where we will take the data

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const HandleLang = () => {
    setLang(lang === "en" ? "hi" : "en");
  };

  return (
    <>
      <LanguageContext.Provider value={{ lang, HandleLang }}>
        {children}
      </LanguageContext.Provider>
    </>
  );
};
