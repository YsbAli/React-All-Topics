import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
  // const state = useSelector((state)=>state)                       // useSelector takes an callback function ,,, it retrive our whole/entire state
  // const state = useSelector((state)=>state)    //it gives us entire state,,, but need only todos,,so that
  // console.log("State", state)     // {toods: Array(1)}  ---> so state means our whole state(initialState) ,,,

  const Todos = useSelector((state) => state.todos); //it gives us the todos              //  {id: 1, title: 'Learn Redux', status: true}
  console.log(Todos);

  return (
    <div>
      {Todos.map((item) => (
          <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

export default TodoList;
