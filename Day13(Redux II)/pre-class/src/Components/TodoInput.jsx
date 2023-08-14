import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { AddTodo } from "../Redux/ActionType";

function TodoInput() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const HandleAdd = () => {
    const payload = {
      title,
      status: false,
      id: uuid(),
    };

    const AddTodoaction = AddTodo(payload);
    dispatch(AddTodoaction);
  };

  return (
    <div>
      <h3>ADD TODO</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="Type Todo Here..."
      />
      <button onClick={HandleAdd}>Add Todo</button>
    </div>
  );
}

export default TodoInput;
