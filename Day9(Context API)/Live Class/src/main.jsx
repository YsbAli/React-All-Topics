import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AllContextProvider } from "./Context/AllContext.jsx";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllContextProvider>
      <App />
    </AllContextProvider>
  </React.StrictMode>
);
