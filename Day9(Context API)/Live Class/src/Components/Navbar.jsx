import { useContext } from "react";
import { AllContext } from "../Context/AllContext";

export const Navbar = () => {
//   const { CartData } = useContext(AllContext);
  const { cartCount } = useContext(AllContext);
//   console.log(cartCount)

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "end",
          padding: "15px",
          fondSize: "28px",
          border: "1px solid grey",
          fontWeight: "bold",
          boxShadow: "border-box",
        }}
      >
        {/* Cart :{CartData} */}
        Cart :{cartCount}
      </nav>
    </>
  );
};
