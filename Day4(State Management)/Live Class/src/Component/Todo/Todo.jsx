// import { useState } from "react";
// import { TodosInput } from "./TodosInput";

// export const Todo = () => {
//   const [todosList, setTodosList] = useState([])

//   const HandleData = (data) => {
//     // console.log(data);
//     setTodosList([...todosList, data])                // it will created new array with all the previous item with new item
//   };

//   return (
//     <>
//       <TodosInput DataFn={HandleData} />

//       {/* Todos List */}
//       {
//         todosList.map((e) => (
//           <div>
//             <li>{e}</li>
//           </div>
//         ))
//       }
//     </>
//   );
// };

// For Practice

import { useState } from "react";
import TodoInput from "./TodosInput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";

export function Todo() {
  const [todos, setTodos] = useState([]);

  const GetTodos = (todo) => {
    console.log(todo);

    const payload = {
      title: todo,
      status: false,
      id: nanoid(5),
    };

    setTodos([...todos, payload]);
  };

  const handleStatus = (id) => {
    console.log("id", id);
    //find id from todolist
    // toggle it's status
    //get a new array, set it again.

    const newarr = todos.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          status: !e.status,
        };
      }
      return e;
    });

    setTodos(newarr);

    // setTodos([...todos.map(e =>e.id ===id ? {...e, status: !e.status} : e)])
  };

  return (
    <>
      <TodoInput todo={GetTodos} />

      {todos.map((el) => (
        // <li>{el}</li>
        <TodoItem handleStatus={handleStatus} todo={el}></TodoItem>
      ))}
    </>
  );
}
