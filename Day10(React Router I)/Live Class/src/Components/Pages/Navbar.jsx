import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/service">Service</Link>
      <Link to="/project/:id">Project</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Navbar;
