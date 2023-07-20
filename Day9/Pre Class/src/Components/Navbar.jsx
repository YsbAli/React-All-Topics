import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

export const Navbar = () => {
  // const Value = useContext(CartContext)
  const { cartCount } = useContext(CartContext);

  return (
    <>
      <div>
        {/* <h2>Navbar</h2> */}
        {/* <h1>Value : {Value}</h1> */}
        <h1>Cart : {cartCount}</h1>
      </div>
    </>
  );
};
