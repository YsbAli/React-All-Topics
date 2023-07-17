import { useState } from "react";
import { ChildTodo } from "./ChildTodo";

const ParentTodo = () => {
  const [todoItem, setTodoItem] = useState([]);

  const TodaData = (data) => {
    console.log(data);
    setTodoItem([...todoItem, data]); //remember to put it in an array   ,,, return an array
  };

  return (
    <>
      <ChildTodo todoData={TodaData} />
      {todoItem.map((e) => (
        <li>{e}</li>
      ))}
    </>
  );
};

export default ParentTodo;
