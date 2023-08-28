import { useDispatch, useSelector } from "react-redux";
import { AddCount } from "../Redux/Counter/Counter_Action";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.CounterKey.counter);

  const handleCount = () => {
    dispatch(AddCount(1));
  };

  return (
    <div>
      <h2>Counter : {counter}</h2>
      <button onClick={handleCount}>ADD</button>
    </div>
  );
};
