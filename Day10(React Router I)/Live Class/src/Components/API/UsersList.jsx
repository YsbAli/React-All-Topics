import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  // api : https://reqres.in/api/users?page=2
  // do api call with axios   -----> npm i axios

  //get request

  // useEffect(() => {
  //   axios.get("https://reqres.in/api/users").then(({ data }) => {
  //     console.log(data);
  //     setUsers(data.data);
  //   });
  // }, []);



  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      console.log(data);
      setUsers(data.data);
    });
  }, []);

  return (
    <>
      <div>
        <h1>Users Page</h1>
        {users.map((user) => (
          // <div key={user.id}>
          //   {user.id}: {user.first_name}
          // </div>

          // new features is when i click on one name, all the details related to that name should be show,,let's see
          //for this we will use useParam hook and the route will be ---- users/:id

          // Now all we have to do is : use Link component in <users.firstname> and <user.lastname>

          <div key={user.i}>
            {/* on clicking user.first_name the Link will redirected to user.id,,, */}
            <Link to={`/users/${user.id}`}>             
              {user.id} : {user.first_name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default UsersList;
