import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const NavigateTo = useNavigate();
  return (
    <div>
      <h1>Logout Page</h1>
      <button
        onClick={() => {
          //server fetch() ....
          alert("You are logged Out! Re-directed to Home Page");

          NavigateTo("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
