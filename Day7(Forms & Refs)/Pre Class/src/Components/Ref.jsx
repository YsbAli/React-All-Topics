/*
We use Ref is to achieve two goals : -- 
    1. Store value, don't want to loss that value after the component is re-render
    2. Chenging this value, should not cause re-render!




*/

// First Goal
// 1. Store value, don't want to loss that value after the component is re-render

// import { useState } from "react";

// export const Ref = () => {
//   const [counter, setCounter] = useState(0);
//   const [x, setX] = useState(0)

//   console.log("The initial Value of X is : ", x);

//   /*
//   let x = 1;
//   console.log("The initial Value of X is : ", x);

//   // on click ChangeX button x value is chenging but when we click add1 button x value remain 1 ... why its not remain changeX value or 6(on Click ChnageX 5 times 1 + 5 = 6)
//   so, by using useState we can easily store the value of x

//   const ChangeX = () => {
//     x = x + 1;
//     console.log("The Value of X is : ", x);
//   };

// */

// // So by using this we can store the value without loosing the value after the component is re-render
// const ChangeXwithState = ()=>{
//     setX (x + 1)
//     console.log("The Value of X is : ", x);                //now the value of x is remain same or on incresing value it does not become 0

// }

//   return (
//     <>
//       <div>
//         <h2>Counter : {counter}</h2>
//         <button onClick={() => setCounter(counter + 1)}>Add 1</button>
//         {/* <button onClick={ChangeX}>Change X</button> */}
//         <button onClick={ChangeXwithState}>Change X</button>
//       </div>
//     </>
//   );
// };





// Second Goal
// 2. Chenging this value, should not cause re-render!






import { useRef, useState } from "react";

export const Ref = () => {
  const [counter, setCounter] = useState(0);
  const xRef = useRef(10);                                    // xRef --> always be an Object like : {current : 10}

  console.log("The initial Value of X is : ", xRef);

  const ChangeXwithState = () => {
    xRef.current = xRef.current + 1;                                 // xRef.current is the current value of xRef,,,, we can change the Value

    console.log("X value after ADD : ", xRef.current);                        
  };

  return (
    <>
      <div>
        <h2>Counter : {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Add 1</button>
        <button onClick={ChangeXwithState}>Change X</button>
      </div>
    </>
  );
};




