import React, { useState } from "react";

function TodoInput() {
  const [title, setTitle] = useState("");

  return (
    <div>
      <h3>ADD TODO</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="Type Todo Here..."
      />
      <button>Add Todo</button>
    </div>
  );
}

export default TodoInput;
