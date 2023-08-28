import { useDispatch, useSelector } from "react-redux";
import { AddCount } from "../Redux/Action";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const handleCount = () => {
    dispatch(AddCount(1));
  };

  console.log("Rendering Counter Components")


  return (
    <div>
      <h2>Counter : {counter}</h2>
      <button onClick={handleCount}>ADD</button>
    </div>
  );
};
