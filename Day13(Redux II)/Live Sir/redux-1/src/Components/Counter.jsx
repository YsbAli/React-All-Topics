import { AddCount } from "../../Redux/Acton";
import { Store } from "../../Redux/Store";

function Counter() {
  console.log(Store.getState());

  const HandleAdd = () => {
    Store.dispatch(AddCount(1));
  };


  return (
    <div>
      <h3>Counter : 0</h3>
      <h3>Counter : {Store.Counter}</h3>
      <button onClick={HandleAdd}>Count</button>
    </div>
  );
}

export default Counter;
