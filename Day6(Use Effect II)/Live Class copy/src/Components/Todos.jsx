import { useState, useEffect } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log("Mounted Todos");
    GetData();                                                        //immidiatly component is mounted and getting the data

    // return  () => {
    //   console.log("UnMounted Todos Done");
    // };

    // cleanup function is called in Unmounting phase,,,,,this funtion is used to stopping promise, stopping network requests...
   //after the components is unmounted
   //  cleanup function will call automatically when the components is unmounted

    return function CleanUp() {
      console.log("Components Unmounted");
    };
  }, [page]);                                                                             // GetData() will call whenever the page value will be change

  const GetData = async () => {  
    // const data = await fetch("http://localhost:3000/todos")                           // this is just an api call
    const data = await fetch(
      `http://localhost:3000/todos?_page=${page}&_limit=3`                               // this is api call with pagination
    ) 
      .then((x) => x.json());
    setTodos(data);                                                                     //we are getting data here...
    setLoading(false);                                                                 //When ever we get data loading should be false
  };

  return loading ? (
    "Loading..."
  ) : (
    <>
      <div>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter Task..."
        />
        <button
          onClick={() => {
            const payload = {
              task: text,
              status: false,
            };

            fetch("http://localhost:3000/todos", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(payload),
            }).then(() => {
              GetData();                                                   //it just re-render    ,,, it calls all the todos again and convert into json , refresh the component and get all the todos back....
            });
          }}
        >
          ADD TODO
        </button>
  {/* Each child in a list should have a unique "key" prop.
 */}
        {todos.map((todo) => (
          <div key = {todo.id}>     
            {todo.id}.{todo.task}{" "}
          </div>
        ))}

        {/* Pagination      --- two button and url --> http://localhost:3000/todos?_page=1&_limit=3     ---> show 3 data per page*/}

        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  );
};

export default Todos;






// function useEffect2(callbackfun, dependency){
//   const ret = callbackfun();

//   if(unmounted){
//     ret()
//   }
// }
