import React from "react";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const NavigateTo = useNavigate();
  return (
    <div>
      <h1>Log in Page</h1>

      <button
        onClick={() => {
          //server fetch()...
          alert("Login Success");

          //   NavigateTo("/products/All Products"); // Navigate to Products with id: All Products
          NavigateTo("/"); //navigate to home page
        }}
      >
        Log in
      </button>
    </div>
  );
}

export default LogIn;
