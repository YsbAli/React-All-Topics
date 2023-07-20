// import "./App.css";
import { useContext } from "react";
import { Cart } from "./Components/Card";
import { Navbar } from "./Components/Navbar";
import { MyButton } from "./StyledComponents/Button";
import { LanguageContext } from "./Context/LanguageContext";

const App = () => {
  const { HandleLang } = useContext(LanguageContext);
  return (
    <>
      <div className="App">
        <MyButton
          onClick={() => {
            HandleLang();
          }}
        >
          Change Language
        </MyButton>

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
