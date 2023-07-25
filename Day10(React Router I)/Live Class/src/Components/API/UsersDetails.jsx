import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UsersDetails = () => {
  const { id } = useParams();
  const [DataUsers, setUserData] = useState([]);

  //calling api for perticular data on id

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
      console.log("id and the Data:,", data);
      setUserData(data.data);
    });
  }, [id]);

  return (
    <>
      <div>
        <h1>Hello : {id}</h1>
        
        {DataUsers.map((usersData) => (
          <div key={usersData.id}>
            <p>
              <strong>
                {usersData.first_name} {usersData.last_name}
              </strong>
            </p>
            <h2>{usersData.email}</h2>
            <img src={usersData.avatar} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersDetails;
