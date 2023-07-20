// import "./App.css";
import { useContext } from "react";
import { Cart } from "./Components/Card";
import { Navbar } from "./Components/Navbar";
import { MyButton } from "./StyledComponents/Button";
import { LanguageContext } from "./Context/LanguageContext";
import { ThemeContext } from "./Context/ThemeContext";


const App = () => {
  const { HandleLang } = useContext(LanguageContext);
  const {HandleTheme} = useContext(ThemeContext)
  return (
    <>
      <div className="App">
        <div>
        <MyButton
          onClick={() => {
            HandleLang();
          }}
        >
          Change Language
        </MyButton>

        <MyButton
          onClick={() => {
            HandleTheme();
          }}
        >
          Change Theme
        </MyButton>
        </div>

        <Navbar />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Cart /> 
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
      </div>
    </>
  );
};

export default App;
