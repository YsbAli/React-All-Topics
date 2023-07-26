import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Service from "./Components/Pages/Service";
import Login from "./Components/Register/Login";
import { NavBar } from "./CompNavbar/NavBar";
import UsersList from "./Components/API/UsersList";
import UsersDetails from "./Components/API/UsersDetails";
import { createContext } from "react";
import { AuthContext } from "./Context/AuthContext";




export const ProtectedComponent = ({ children }) => {
  const { isAuth } = createContext(AuthContext);

  if (!isAuth) {
    return;
  }
};

const App = () => (
  <>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/service"} element={<Service />}></Route>
        <Route path={"/users"} element={<UsersList />}></Route>
        <Route
          path={"/users/:id"}
          element={
            <ProtectedComponent>
              <UsersDetails />
            </ProtectedComponent>
          }
        ></Route>
        <Route path={"/login"} element={<Login />}></Route>
      </Routes>
    </div>
  </>
);

export default App;
