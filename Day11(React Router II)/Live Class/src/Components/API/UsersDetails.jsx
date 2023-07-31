import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


// import { AuthContext } from "../../Context/AuthContext";
// import { Navigate } from "react-router-dom";

const UsersDetails = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  // const { isAuth } = useContext(AuthContext);

  // console.log("UserDetails", userData);






  //calling api for perticular data on id
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
      console.log("id and the Data:,", data);
      setUserData(data.data);
    });
  }, []);






  //is login false then show this.......it is in the protectedComponent
  // if (!isAuth) {
  //   return <Navigate to={"/login"} />; //declarad that i have to login to show the below details
  // }




  const Container = {
    textAlign: "center",
    marginTop: "30px",
  };

  return (
    <>
      <div style={Container}>
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
