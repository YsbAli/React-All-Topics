import { useEffect, useState } from "react";
import axios from "axios";

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
      // console.log(data);
      setUsers(data.data);
    });
  }, []);

  return (
    <>
      <div>
        <h1>Users Page</h1>
        {users.map((user) => (
          <h5 key={user.id}>
            {user.id}: {user.first_name}
          </h5>
        ))}
      </div>
    </>
  );
};
export default UsersList;
