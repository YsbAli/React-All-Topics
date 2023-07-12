import React from "react";

export default function Counter() {
  const [counter, setCounter] = React.useState(0);

  const handleAdd = (value) => {
    setCounter(counter + value);
  };

  return (
    <>
      <div>
        <h2>Counter</h2>
        <h2>{counter}</h2>
        <button
          onClick={() => {
            handleAdd(1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            counter === 0 ? counter : handleAdd(-1);
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
}
