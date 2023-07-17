// import { useState } from "react";
// import { CounterDisplay } from "./Component/Counter";
// import { Button } from "./Component/Button";

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       {/* <h1>Day4 ~ State Management ~ Pre Class</h1>
//       <CounterDisplay Count={count} />
//       <Button
//         AddFunc={() => {
//           setCount(count + 1);
//         }}
//       /> */}

//       {/* <CounterDisplay Count={data} />
//         <Button AddFunc={()=>{setData(data + 'Yousub')}}/> */}
//       {/* So now we can use the Button component everywhere */}
//     </>
//   );
// }

// export default App;

/*

// There are multiple ways to pass the data ,,,,
   1. Parent - Child
   2. Child - Parent
   3. Sibling - Sibling


   






*/

// Parent to Child

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const Name = "Yousub ,,, i'm coming from Parent Component";
//   return (
//     <>
//       <First CountData={count} />
//       <Second SecendProps={Name} />
//     </>
//   );
// }

// export default App;

// const First = ({ CountData }) => {
//   return (
//     <div>
//       <h2>First Component</h2>
//       <h1>Count Data from App : {CountData}</h1>
//     </div>
//   );
// };

// const Second = ({ SecendProps }) => {
//   return (
//     <>
//       <h2>Second Components</h2>
//       <h3>Coming From App Data is : {SecendProps}</h3>
//     </>
//   );
// };

// // // Child to Parent

// function App() {
//   const GetData = (data) => {
//     console.log("Data from Child is:", data);
//     // alert("Data from Child is:",data)
//   };

//   return (
//     <>
//       <First FirstDataFn={GetData} />
//       <Second SecondDataFn={GetData} />
//     </>
//   );
// }

// export default App;

// const First = ({ FirstDataFn }) => {
//   const Name = "Ishan from First Child Component";
//   const Number  = 12

//   FirstDataFn(Name);
//   FirstDataFn("First Number" + Number)

// };

// const Second = ({ SecondDataFn }) => {
//   const Name = "Yousub, it is  coming from Second Child Component";
//   const Roll_number = 12;
//   SecondDataFn(Name);
//   SecondDataFn("Second Number" + Roll_number)

// };





//Child to Child or Sibling to Sibling

import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(10);

  const getdata = (data) => {
    console.log("Data From First Component " + data);
    setNumber(data); // passing data because we have to pass the update( earlier it was 0 now 10) data and pass to another child here Second
  };

  return (
    <>
      <h1>App Component</h1>
      <First FirstData={getdata} />
      <Second Number={number} />
      <h2>Number from Child named First is : {number}</h2>
    </>
  );
};

export default App;

export const First = ({ FirstData }) => {
  const FirstNumber = 1100;
  FirstData(FirstNumber);
  return <></>;
};

export const Second = ({ Number }) => {
  return (
    <>
      <h1>The Data Coming from the Sibling First Components is : {Number}</h1>
    </>
  );
};
