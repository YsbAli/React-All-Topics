import { useDispatch, useSelector } from "react-redux";
import {
  // AddTodo,
  ToggleTodo,
  deleteTodo,
  // filterTodo,
  getData,
  sortTodo,
} from "../Redux/Todo/Action";
import { useEffect, useState } from "react";

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
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("");
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

  // const HandleTodo = () => {
  //   const payload = {
  //     type: text,
  //     status: false,
  //   };

  //   //network post request

  //   fetch("http://localhost:8000/todos", {
  //     body: JSON.stringify(payload),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     method: "POST",
  //   }).then(getData); // .then(getData) ---> this is for data adding in UI,,,after saving the data,,,calling the data again
  // };

  const HandleTodo = () => {
    const payload = {
      type: text,
      status: false,
    };

    fetch("http://localhost:3000/todos", {
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(() => setText(""))
      // .then(getData); //first .then is for ---> after adding the data setinput box empty
      .then(() => {
        dispatch(getData());
      });
  };

  //calling useEffect for fetching the data

  // useEffect(() => {
  //   getData();
  // }, []);

  //we will give that async function action to dispatch

  useEffect(() => {
    dispatch(getData()); //dispatch is recieving here a function that returns a async function
    //so now action is a function, it's an async function,,but redux need action as an object , it will throw error,
  }, []);

  // //the data from network or db
  // const getData = () => {
  //   fetch("http://localhost:3000/todos")
  //     .then((x) => x.json())
  //     .then((data) => {
  //       dispatch(AddTodo(data));
  //     });
  // };

  // console.log("Rendering Todo Components");

  return (
    <div>
      <input
        onChange={(e) =>
          // dispatch(filterTodo(e.target.value))
          setFilter(e.target.value)
        }
        type="text"
        placeholder="Filter"
      />
      <select
        onChange={(e) => {
          dispatch(sortTodo(e.target.value));
        }}
      >
        <option value="id">Sort by id</option>
        <option value="status">Sort by status</option>
        <option value="type">Sort by Titile</option>
      </select>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Add Todo..."
      />
      <button onClick={HandleTodo}>Add Todo</button>
      <h3>Your todo will apear here...</h3>
      {/* {todos.map((i) => (
        // <h4>Your todos are</h4>
        <h2 key={i}>
          {i.id}. {i.type} --- {i.status ? "Done" : "Not Done"}
        </h2>
      ))} */}

      {/* Filter  */}

      {todos
        .filter((todo) => todo.type.includes(filter))
        .map((i) => (
          // <h4>Your todos are</h4>
          <div key={i}>
            {i.id}. {i.type} --- {i.status ? "Done" : "Not Done"}
            <button onClick={() => dispatch(ToggleTodo(i.id))}>Toggle</button>
            <button
              onClick={() => {
                dispatch(deleteTodo(i.id));
              }}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};
