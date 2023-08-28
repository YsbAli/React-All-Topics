import { Counter } from "./Components/Counter";
import { Todo } from "./Components/Todo";

const App = () => {
  const Style = {
    margin: "0px",
    padding: "10px",
    // border: "1px solid red",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  };

  return (
    <>
      <div style={Style}>
        <Counter />
        <br />
        <hr />
        <br />
        <Todo />
      </div>
    </>
  );
};

export default App;
