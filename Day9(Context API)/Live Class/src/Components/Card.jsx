import { useContext } from "react";
import { AllContext } from "../Context/AllContext";
import { MyButton } from "../StyledComponents/Button";

export const Cart = () => {
  const { HandleCartCount } = useContext(AllContext);
  return (
    <>
      <div
        style={{
          height: "150px",
          width: "200px",
          padding: "10px",
          background: "teal",
          margin: "10px",
        }}
      >
        <MyButton
          onClick={() => {
            HandleCartCount(1);
          }}
        >
          Add To Card
        </MyButton>
      </div>
    </>
  );
};
