import { useDispatch, useSelector } from "react-redux";
import { AddTodo } from "../Redux/Todo/Todo_Action";
import { useState } from "react";

export const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.TodoKey.todo);
  console.log(todos);
  const [text, setText] = useState("");

  const HandleTodo = () => {
    dispatch(
      AddTodo({
        type: text,
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
      <button onClick={HandleTodo}>Add Todo</button>
      <h3>Your todo will apear here...</h3>
      {todos.map((i) => (
        // <h4>Your todos are</h4>
        <h1 key={i}>{i.type}</h1>
      ))}
    </div>
  );
};
