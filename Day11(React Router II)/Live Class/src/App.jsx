import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Service from "./Components/Pages/Service";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";
import Register from "./Components/Pages/Register";
import Login from "./Components/Register/Login";
import Logout from "./Components/Register/Logout";
import { NavBar } from "./CompNavbar/NavBar";
import UsersList from "./Components/API/UsersList";
import UsersDetails from "./Components/API/UsersDetails";

const App = () => (
  <>
    <div className="App">
      {/* <Navbar /> */}
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/service"} element={<Service />}></Route>
        <Route path={"/project/:id"} element={<Projects />}></Route>
        {/* <Route path={"/users"} element={<Users />}></Route> */}
        <Route path={"/users"} element={<UsersList />}></Route>
        <Route path={"/users/:id"} element={<UsersDetails />}></Route>

        {/* this routes for above Navbar */}
        {/* <Route path={"/register"} element={<Register />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/logout"} element={<Logout />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route> */}
      </Routes>
    </div>
  </>
);

export default App;
