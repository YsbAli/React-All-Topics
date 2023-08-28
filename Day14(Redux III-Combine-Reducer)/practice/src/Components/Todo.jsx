import { useDispatch, useSelector } from "react-redux";
// import { AddTodo } from "../Redux/Todo/Action";
import { useState } from "react";

export const Todo = () => {
  // const todos = useSelector((state) => state.todo);
  // const todos = useSelector(
  //   (state) => state.todo
  //   // (prev, current)=>{
  //   //    //
  //   // }
  // );

  //after combiner reducer,,,,
  const todos = useSelector((state) => state.todos.todos);

  // const dispatch = useDispatch();
  const [text, setText] = useState("");
  // console.log(todos);

  // const HandleTodo = () => {
  //   dispatch(
  //     AddTodo({
  //       type: text,
  //       status: false,
  //     })
  //   );
  // };

  //for network request or storing data/todo in db.json

  const HandleTodo = () => {
    const payload = {
      title: text,
      status: false,
    };

    //network post request

    fetch("http://localhost:8000/todos", {
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    });
  };

  console.log("Rendering Todo Components");

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
