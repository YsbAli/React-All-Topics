import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Register Page</h1>
      <button
        onClick={() => {
          alert("You are re-directed to Login Page");
          navigate("/login");
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          alert("You are Logged Out! Re-directed to Home Page");

          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Register;
