import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo } from "../Redux/Action";

function Todos() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);

  const HandleAdd = () => {
    dispatch(
      AddTodo({
        title: text,
        status: false,
      })
    );
  };

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Add Todo..."
      />
      <button onClick={HandleAdd}>ADD</button>
      {todos.map((todo) => (
        <div key={todo.title}>{todo.title}</div>
      ))}
    </div>
  );
}

export default Todos;
