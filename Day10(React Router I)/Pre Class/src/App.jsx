// import "./App.css";

import About from "./Components/About";
import ContactUs from "./Components/Contact Us";
import FAQ from "./Components/FAQ";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Products from "./Components/Products";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LogIn from "./Components/LogIn";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path={"/"} element={<Home />}>
            Home
          </Route>
          <Route path={"/about"} element={<About />}>
            ABout
          </Route>
          <Route path={"/products/:id"} element={<Products />}>
            Products
          </Route>
          <Route path={"/services"} element={<Services />}>
            ABout
          </Route>
          <Route path={"/contact"} element={<ContactUs />}>
            Contact
          </Route>
          <Route path={'/login'} element={<LogIn/>}>Log in</Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
