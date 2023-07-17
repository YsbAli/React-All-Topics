// import "./App.css";
// import React, { useState } from "react";
// import Counter from "./Components/Counter";

// const App = () => {
//   const [count, setCount] = useState(0);

//   console.log(1);

//   //  empty array dependency---It will trigger only once ....

//   React.useEffect(() => {
//     console.log("Inside useEffect");
//   }, []);
//   console.log(2);

//   //no dependency    b-- it will run each render

//   React.useEffect(() => {
//     console.log("Before Clicking");
//     document.title = `Clicked ${count} times`;
//   }, [count]);

//   return (
//     <>
//       <div className="App">
//         <h3>Count : {count}</h3>
//         <button onClick={() => setCount(count + 1)}>Add</button>

//         <Counter />
//       </div>
//     </>
//   );
// };

// export default App;





// ////Still Closure or Still State,

// import { useState } from "react";
// import "./App.css";
// import Counter from "./Components/Counter";
// import { Example } from "./Components/Example";

// const App = () => {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <div className="App">
//         {show && <Counter />}
//         <button onClick={() => setShow(!show)}>ShowCounter</button>

//         <Example />
//       </div>
//     </>
//   );
// };

// export default App;

// 






///Todo App With Network Request



import "./App.css";
import { Todo } from "./Components/Todo";

const App = () => {
  return (
    <>
      <div className="App">
        <Todo />
      </div>
    </>
  );
};

export default App;






