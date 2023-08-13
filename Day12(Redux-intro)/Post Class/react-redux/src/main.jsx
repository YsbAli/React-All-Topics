import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Store } from "../src/Redux/Store.js";
import { AppContextProvider } from "./Redux/AppContextProvider.jsx";

// console.log(Store.getState())

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider store={Store}>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
