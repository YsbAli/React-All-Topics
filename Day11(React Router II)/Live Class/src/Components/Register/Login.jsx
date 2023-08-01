// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const Navigate = useNavigate();

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <button
//         onClick={() => {
//           // server fetch()...
//           alert("Your are Login! Re-directed to Product page");
//           Navigate("/project/:id");
//         }}
//       >
//         Login
//       </button>
//     </div>
//   );
// }

// export default Login;

// Protected Login page:  show below login page is want to show userDetails

import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { HandleAuth } = useContext(AuthContext);
  const Navigate = useNavigate();

  const Stylelogin = {
    margin: "40px",
    padding: "40px",
  };

  return (
    <>
      <div style={Stylelogin}>
        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <input type="Submit" />
      </div>
      <div>
        <button
          onClick={() => {
            //make network request POST req.in/api/login with email and password
            //token
            //change  state of IsAuth to true
            HandleAuth(true);
            // alert('Clicked')
            // Navigate("/users/:id");
            Navigate("/", { replace: true });          // this replace is for after log in 
            // Navigate("/about");
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
