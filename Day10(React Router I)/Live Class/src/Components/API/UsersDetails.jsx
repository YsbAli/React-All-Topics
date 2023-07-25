import { useParams } from "react-router-dom";

const UsersDetails = () => {
  const { id } = useParams();

  return (
    <>
      <div>
        <h2>Hello Users Details Page</h2>
        <h3>Users Id : {id}</h3>
      </div>
    </>
  );
};

export default UsersDetails;
