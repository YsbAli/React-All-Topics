import React, { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(10);

//   React.useEffect(() => {
//     const id = setInterval(() => {
//       console.log("Inside Set Intervel", count)
//       if (count === 0) {
//         clearTimeout(id);
//       } else {
//         setCount(count - 1);
//       }
//     }, 1000)
//   }, [])

//   return (
//     <>
//       <h2>Counter : {count}</h2>
//     </>
//   );
// }

//in the above code --- there a still closure is created....'
//  So to avoid this we need to a callback

const Counter = () => {
  const [count, setCount] = useState(10);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCount(function (prev) {
        if (prev === 0) {
          clearInterval(id);
          return prev;
        }
        return prev - 1;
      });
    }, 1000);

    //clean up
    return () => {
      console.log("Cleaning up any setintervel");
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1>Counter : {count}</h1>
    </>
  );
};

export default Counter;
