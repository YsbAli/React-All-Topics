import React, { useState } from "react";

export const Counter = () => {
  // let counter = 0;

  const [counter, setCounter] = useState(0)

  return (
    <>
    <div className="App">
      <h3>Counter : {counter}</h3>
      <button onClick={()=>{
        // counter++;   //we cant update like this ,,,,
        console.log("Counter changed", counter)


      }}>ADD</button>
    </div>
    
    
    
    </>

  )
};
