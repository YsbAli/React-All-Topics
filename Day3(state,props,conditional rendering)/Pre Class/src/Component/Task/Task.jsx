import React from "react";
import { TaskItem } from "./TaskItem";

export default function Task() {
  const [query, setQuery] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  const handleTask = (e) => {
    // console.log(e)                     //Synthetic event will trigger
    // console.log(e.target)             // This will trigger the pertuculer input <input type="text" placeholder="Add Task..." value>
    // console.log(e.target.value)       // this will print the actuall value which we will type in the input box i.e  value of the input box

    const { value } = e.target; // here , we are extracting the value of the input box
    setQuery(value);
    // console.log(value);                   //  it will print the value of the input box
  };

  const HandleAdd = () => {
    const payload = {
      //This variable will put the query and the status
      title: query,
      status: false,
    };

    const newArr = [...tasks, payload]; // this is new array with all task and patload information   ,,,araay Destructuring

    setTasks(newArr); // passing newArr  to update all tasks value
  };

  //   console.log(tasks);                       // this will print  all the data  added to the tasks ,,on clicking add button
  return (
    <>
      <div>
        <h1>Tasks</h1>
        <div>
          <input
            value={query}
            type="text"
            onChange={handleTask}
            placeholder="Add Task..."
          />
          <button onClick={HandleAdd}>ADD</button>
        </div>
        <div>
          {tasks.map((item, index) => {
            // return <div>  <li>{item.title} </li> </div>

            //    return  <TaskItem title={item.title} status={item.status} />;    // here title and status are same as key:value so we can write like this
            // return <TaskItem  color ={"red"} {...item}/>                            //can give the color also

            return (
              <TaskItem color={index % 2 === 0 ? "teal" : "blue"} {...item} />
            );
          })}
        </div>
      </div>
    </>
  );
}
