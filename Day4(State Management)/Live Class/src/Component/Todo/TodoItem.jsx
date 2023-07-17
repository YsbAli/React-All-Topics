export const TodoItem = ({ todo, handleStatus }) => {
  return (
    <>
      {/* <div>{todo} <button>Delete</button></div>   Delete Button will be added with each todo when we write todo*/}
      <div>
        {/* {todo} <button> Toggle</button> <button>Delete</button> <button>Completed</button>  can give anything here*/}
        {/* We can pass id here  */}
        {/* <div><h5>Todo id is : {todo.id}</h5></div> */}
        {todo.title} - id is: {todo.id} -{" "}
        {todo.status ? "Complete" : "Not Complete"}
        <button onClick={() => handleStatus(todo.id)}> Toggle</button>
      </div>
    </>
  );
};
