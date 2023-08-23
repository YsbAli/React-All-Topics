import { useDispatch, useSelector } from "react-redux";
import { AddTodo } from "../Redux/Action";
import { useState } from "react";

export const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const [text, setText] = useState("");
  console.log(todos);

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
