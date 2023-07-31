import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Service from "./Components/Pages/Service";
import Login from "./Components/Register/Login";
import { NavBar } from "./CompNavbar/NavBar";
import UsersList from "./Components/API/UsersList";
import UsersDetails from "./Components/API/UsersDetails";
// import { createContext, useContext } from "react";
// import { AuthContext } from "./Context/AuthContext";
import { PrivateComponent } from "./Components/PrivateRoute/PrivateComponent";

// Private Component so that we can use Anywhere we want dynamically,,,

// export const PrivateComponent = ({children}) => {
//   const { isAuth } = useContext(AuthContext);

//   if (!isAuth) {
//     return <Navigate to = '/login' />
//   }
//   return children;
// };

//Copied it to the PrivateComponent File....

const App = () => (
  <>
    <div className="App">
      <NavBar />
      <Routes>
        {/* user only can see UserDetails page when they are log in */}

        <Route
          path={"/users/:id"}
          element={
            <PrivateComponent>
              <UsersDetails />
            </PrivateComponent>
          }
        ></Route>

        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        {/* <Route path={"/service"} element={<Service />}></Route> */}

        {/* Want to protect service page also,,,user can be show after log in */}
        <Route
          path={"/service"}
          element={
            <PrivateComponent>
              <Service />
            </PrivateComponent>
          }
        ></Route>
        <Route path={"/users"} element={<UsersList />}></Route>
        {/* <Route path="/users/:id" element={<UsersDetails />} /> */}
        <Route path={"/login"} element={<Login />}></Route>
      </Routes>
    </div>
  </>
);

export default App;
