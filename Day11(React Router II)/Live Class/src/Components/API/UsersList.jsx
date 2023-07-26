// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const UsersList = () => {
//   const [users, setUsers] = useState([]);

//   // api : https://reqres.in/api/users?page=2
//   // do api call with axios   -----> npm i axios

//   //get request

//   // useEffect(() => {
//   //   axios.get("https://reqres.in/api/users").then(({ data }) => {
//   //     console.log(data);
//   //     setUsers(data.data);
//   //   });
//   // }, []);

//   useEffect(() => {
//     axios.get("https://reqres.in/api/users").then(({ data }) => {
//       // console.log(data);
//       setUsers(data.data);
//     });
//   }, []);

//   return (
//     <>
//       <div>
//         <h1>Users Page</h1>
//         {users.map((user) => (
//           // <div key={user.id}>
//           //   {user.id}: {user.first_name}
//           // </div>

//           // new features is when i click on one name, all the details related to that name should be show,,let's see
//           //for this we will use useParam hook and the route will be ---- users/:id

//           // Now all we have to do is : use Link component in <users.firstname> and <user.lastname>
//           // {/* on clicking user.first_name the Link will redirected to user.id,,, */}

//           // <div key={user.i}>
//           //   <div>
//           //     <img src={user.avatar} alt="" />
//           //   </div>
//           //   <Link to={`/users/${user.id}`}>
//           //     {user.id} : {user.first_name}
//           //   </Link>
//           // </div>

//           // Now want to create Link tag in a image

//         ))}
//       </div>
//     </>
//   );
// };
// export default UsersList;

// Practice and create with new features

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [userData, setUserData] = useState([]);
  //Api Call

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      console.log("Api Data", data);
      setUserData(data.data);
    });
  }, []);

  // Styling

  const UserDiv = {
    marginTop:'10px',
    fontFamily: "sans-serif",
    textAlign: "center",
  };

  const Name = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <>
      <div style={UserDiv}>
        {userData.map((apidata) => (
          <div key={apidata.id}>
            {/* <p> {apidata.id}</p> */}
            {/* <img src={apidata.avatar} alt="" /> */}

            <Link style={Name} to={`/users/${apidata.id}`}>
              {/* <img src={apidata.avatar} alt="" /> */}
              <h3>
              {apidata.id}. {apidata.first_name} {apidata.last_name}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersList;






// Now todays task is : I don't want to show user details if user is not logged in....




 