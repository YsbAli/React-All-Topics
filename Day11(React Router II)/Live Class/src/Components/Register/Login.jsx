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
  const navigate = useNavigate();

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
            HandleAuth(true);                                                  // onClick event a amra kono component returns korte parina... that's why we use here useNavigate hook that returns a navigate function
            // alert('Clicked')
            // Navigate("/users/:id");
            // Navigate("/", { replace: true });                              // this replace is for after log in
            // Navigate("/about");
            navigate(-2, { replace: true });                                 // (-1) -->first entry onto the stack,,, (-2) -> means navigate to second one from the current entry to the stack....
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
