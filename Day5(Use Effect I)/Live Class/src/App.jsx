// import "./App.css";
// import React, { useEffect } from "react";
// import Hello from "./Components/Hello";

// const App = () => {
//   const [show, setShow] = React.useState(false);
//   console.log("Before UseEffect"); //it will run first

//   //
//   useEffect(() => {
//     console.log("Inside UseEffect 1"); // it will run third the last // useEffect will use the callback and React will store the callback.
//   });

//   useEffect(() => {
//     console.log("Inside UseEffect 2");
//   });

//   // useEffect 1 will run first and then useEffect 2 and the thee other code........
//   //so effect is synchronous --- it means it run one after another....that's why here  Inside UseEffect 1 print first and Inside UseEffect 2 print second

//   console.log("After UseEffect"); //it will run second

//   return (
//     <>
//       <div className="App">
//         {/* <h1>Live Class Day 5</h1> */}
//         {
//           show ? <Hello /> : null //if show is true thenn show hello component
//         }
//         <button onClick={() => setShow(!show)}>Toggle Component</button>
//         {/* by this button we can show how we can destroy a component or mount a components */}
//       </div>
//     </>
//   );
// };

// export default App;

// // in the Above code we will see the basic of useEffect hook

// .............................-------------------------------.....................................

// Now we will show useEffect hook with the json-server data or api data

/*



import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then((d) => d.json())
    .then((data) => {
      console.log(data);
      // setTodos(data)       //but this will create a infinite loop due to it will run every render. that's why we need to use useEffect wil empty array dependency [],,,, like this...
    });

  // but above code  will create a infinite loop due to it will run every render. that's why we need to use useEffect wil empty array dependency [],,,, like this....

  // the ()=> callback function is synchronous function ,,,it is not a async await function ,,,

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((X) => X.json())
      .then((data) => {
        console.log(data);
        setTodos(data)
      });
  }, []);          // [] empty array :- call only once



  // to do async await function we have to do :-:-:-

  useEffect(() => {
    const GetData = async () => {
      const data = await fetch("http://localhost:3000/todos").then((x) =>
        x.json()
      );
      setTodos(data);
    };
    GetData();
  }, []);

  return (
    <>
      <div className="App">
        {todos.map((x) => (
          <div>

            {x.id}.{x.task}
            
          </div>
        ))}
      </div>
    </>
  );
};

export default App;



*/

/*




import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [Counter, setcounter] = useState(0);
  const [age, setAge] = useState(10);

  // runs every render
  useEffect(() => {
    console.log("inside Effect 1");
  });

  // runs only when age is changes........

  // useEffect(() => {
  //   console.log("inside useEffect 2");
  // }, [age]);




  // it will runs only when  Counter value is changes

  useEffect(() => {
    console.log("inside useEffect 2");
  }, [Counter]);

  //it will runs when age and Counter both value is changes

  useEffect(() => {
    console.log("inside useEffect 2");
  }, [age, Counter]);

  return (
    <>
      <div className="App">
        <h1>Counter : {Counter}</h1>
        <button onClick={setcounter(Counter + 1)}>ADD 1</button>

        <div>
          <h3>Age : {age}</h3>
          <button onClick={setAge(age + 1)}>Age Changes</button>
        </div>
      </div>
    </>
  );
};

export default App;


*/

//  Now lets continue with  the todos work


import "./App.css";
import Todos from "./Components/Todos";

const App = () => {
  return (
    <>
      <div className="App">
        <Todos />
      </div>
    </>
  );
};

export default App;
