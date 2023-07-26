import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UsersDetails = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  console.log("UesrDetails", userData);
  //calling api for perticular data on id

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
      console.log("id and the Data:,", data);
      setUserData(data.data);
    });
  }, []);

  const Container = {
    textAlign: "center",
    marginTop:'30px',
  };

  return (
    <>
      <div style={Container}>
        {/*         
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
        ))} */}


        <div>
          <img src={userData.avatar} alt="" />
          <h2>
             Name : {userData.first_name} {userData.last_name}
          </h2>
          <h3>Email : {userData.email}</h3>
        </div>
      </div>
    </>
  );
};

export default UsersDetails;
