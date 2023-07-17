import React from "react";

const Example = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Called inside useEffect at :", Date.now());

    return () => {
      console.log("Called clean up at:", Date.now());
    };
  });
  return (
    <>
      <div>
        <h1>Example Counter : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
    </>
  );
};

export { Example };
