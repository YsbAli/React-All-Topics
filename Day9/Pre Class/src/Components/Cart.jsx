import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

function Cart() {
  const { HandleCartUpdate } = useContext(CartContext);
  return (
    <div>
      {/* <h1>Cart Component</h1> */}
      <button
        onClick={() => {
          HandleCartUpdate(1);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Cart;
