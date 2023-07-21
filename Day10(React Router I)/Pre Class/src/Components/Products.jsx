import React from "react";
import { useParams } from "react-router-dom";

function Products() {
  // const value = useParams();           //{id: '1'}   //{id: "laptop"}
  // console.log(value);

  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h2>Products page</h2>
      <p>Products id: {id}</p>
    </div>
  );
}

export default Products;
