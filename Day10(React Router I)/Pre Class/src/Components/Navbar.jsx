import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        padding: "10px",
        margin: "10px 20x",
        border: "1px solid red",
        textAlign: "center",
        fontSize: "2rem",
      }}
    >
      {/* <a href=""></a>     --> this will make network request for every click on link*/}
      {/* <a href="/">Home</a>
      <a href="/about">About</a> */}

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/products/:id">Products</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Navbar;
