import { AddCount } from "../../Redux/Acton";
import { Store } from "../../Redux/Store";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  console.log(Store.getState());
  const dispatch = useDispatch();
  //   const UpdatedCounter = useSelector((store) => store.counter);                    // getting entire state or store or entire data here...
  //UpdatedCounter is the updated value of counter and the store.counter is the initial state or initial value of counter

  //   const UpdatedCounter = useSelector((store) => {
  //     return store.counter;
  //   });

  const UpdatedCounter = useSelector((state) => state.counter);

  const HandleAdd = () => {
    // Store.dispatch(AddCount(1));
    dispatch(AddCount(1));
    // console.log("UpdatedCounter", UpdatedCounter);
    // UpdatedCounter === 5
    //   ? dispatch(AddCount(1))
    //   : "Counter value can't be more than 5";
  };

  return (
    <div>
      <h3>Counter : {UpdatedCounter}</h3>
      {/* <h3>Counter : {Store.getState().Counter}</h3> */}
      <button onClick={HandleAdd}>Count</button>
    </div>
  );
}

export default Counter;
