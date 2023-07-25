// import { useEffect, useState } from "react";
// import axios from "axios";

// const Users = () => {
//   const [users, setUsers] = useState([]);

//   // api : https://reqres.in/api/users?page=2
//   // do api call with axios   -----> npm i axios

//   //get request

//   useEffect(() => {
//     axios.get("https://reqres.in/api/users").then(({ data }) => {
//       console.log(data);
//       setUsers(data.data);
//     });
//   }, []);

//   return (
//     <>
//       <div>
//         <h4>User Page... </h4>
//         {users.map((user) => (
//           <h5 key={user.id}>
//             {user.id}. {user.first_name}
//           </h5>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Users;
