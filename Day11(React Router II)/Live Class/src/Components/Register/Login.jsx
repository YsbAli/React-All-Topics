import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const Navigate = useNavigate();
  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={() => {
          //server fetch()...
          alert("Your are Login! Re-directed to Product page");
          Navigate("/project/:id");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
