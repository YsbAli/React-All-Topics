import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Products() {
  // const value = useParams();           //{id: '1'}   //{id: "laptop"}
  // console.log(value);
  const { id } = useParams();
  console.log(id);

  const Navigate = useNavigate();

  return (
    <div>
      <h2>Products page</h2>
      <p>Products id: {id}</p>
      <button
        onClick={() => {
          //server Fetch()...
          alert("You are Registered");

          Navigate("/login");                     //onclicking register page user will re-direct to login page
        }}
      >
        Register
      </button>
    </div>
  );
}

export default Products;
