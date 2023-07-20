import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const HandleTheme = () => {
    // setTheme(theme === "dark" ? "#fff" : "#000000")
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, HandleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
