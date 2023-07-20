import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AllContextProvider } from "./Context/AllContext.jsx";
import { LanguageContextProvider } from "./Context/LanguageContext.jsx";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllContextProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </AllContextProvider>
  </React.StrictMode>
);




/*
  <AllContextProvider> 
  and order does not matter
  <LanguageContextProvider> 



*/
