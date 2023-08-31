import { useDispatch, useSelector } from "react-redux";
import { AddCount } from "../Redux/Counter/Action";
export const Counter = () => {
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter);
  //after Combine Reducer
  const counter = useSelector((state) => state.counter.counter);

  const handleCount = () => {
    dispatch(AddCount(1));
  };

  console.log("Rendering Counter Components");

  return (
    <div>
      <h2>Counter : {counter}</h2>
      <button onClick={handleCount}>ADD</button>
    </div>
  );
};
