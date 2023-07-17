import { useState } from "react";

export const ChildTodo = ({ todoData }) => {
  const [text, setText] = useState();
  return (
    <>
      <div>
        <h1> ~: Todo List :~ </h1>

        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Type Input Here..."
        />
        <button
          onClick={() => {
            todoData(text);
          }}
        >
          ADD
        </button>
      </div>
      <p>{text}</p>
    </>
  );
};
