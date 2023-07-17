import "./App.css";
import { Todo } from "./Component/Todo/Todo";

// import ParentTodo from "./Practice/TodoApp/ParentTodo";

const App = () => {
  return (
    <>
      <div className="App">
        {/* <ParentTodo /> */}
        <Todo/>
      </div>
    </>
  );
};

export default App;
