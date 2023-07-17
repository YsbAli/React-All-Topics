// import { useState } from "react";

// export const Counter = () => {
//   const [count, setCount] = useState(10);
//   return (
//     <>
//       <div>
//         <h3>Count : {count}</h3>
//         <button
//           onClick={() => {
//             setCount(count + 1);
//           }}
//         >
//           ADD 1
//         </button>
//       </div>
//     </>
//   );
// };

//We will use Counter App as CounterDisplay




export const CounterDisplay = ({ Count }) => {
  return (
    <>
      <div>
        <h3>Count : {Count}</h3>
      </div>
    </>
  );
};
