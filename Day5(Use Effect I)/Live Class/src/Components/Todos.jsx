import { useState, useEffect } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    GetData();                     //immidiatly component is mounted and getting the data
  }, []);

  const GetData = async () => {
    const data = await fetch("http://localhost:3000/todos").then((x) =>
      x.json()
    );
    setTodos(data);            //we are getting data here...
    setLoading(false)          //When ever we get data loading should be false
  };

  return loading ? ("Loading..."):(
    <>
      <div>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter Task..."
        />
        <button
          //   onClick={() => {
          //     const payload = {
          //       task: text,
          //       status: false,
          //     };

          //     fetch("http://localhost:3000/todos", {
          //       method: "POST",
          //       headers: {
          //         "content-type": "application/json",
          //       },
          //       body: JSON.stringify(payload),
          //     });
          //     {
          //       /* using axios ---> axios.post("http://localhost:3000/todos", payload) */
          //     }
          //   }}

          // in the above code we add/post data in json-server.... but now we can add data and show to ui aslo

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
              GetData();                 //it just re-render    ,,, it calls all the todos again and convert into json , refresh the component and get all the todos back....
            });
          }}
        >
          ADD TODO
        </button>

        {todos.map((todo) => (
          <div>{todo.task} </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
