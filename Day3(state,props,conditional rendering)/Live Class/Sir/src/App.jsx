import "./App.css";
import { Category } from "./Components/Category/Category";
import React from "react";
import { useState } from "react";

function App() {
  const Navbar = [
    {
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/50379f65f7b59622.png?q=100",
      title: "Top Offers",
    },
    {
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/aecfaba5969b96dd.png?q=100",
      title: "Grocery",
    },
    {
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f7b2a4eeb35a8c9f.png?q=100",
      title: "Fashion",
    },
  ];

  // For State part....we can take any name here in the counter or setCounter part ,,,,we can take any name in the setState or in the state
  // const [Counter, setCounter] = React.useState(0);
  const [Counter, setCounter] = useState(0);

  // we are creating a function which will be in reuse ...we will reuse this function
  const HandleAdd = (value) => {
    //showing alert when counter goes to 10;
    // if (Counter >= 5) {
    //   alert("Counter Reached the maximum value");
    //   return; //returning because this will not execute further code
    // }
    setCounter(Counter + value);
  };
  //  If Counter >=10 it will print the h4 value .....and it will not go to the next return part or it will not execute the rest of the code.
  if (Counter >= 10) {
    return <h4>Counter Has Reached Maximum Value</h4>; //can return only valid html
  }

  return (
    
    <>
      <div className="Nav">
        {Navbar.map((el) => (
        <Category image={el.image} label={el.title} />
      ))}

        {/* in the above all data is coming from the Navbar variable ,,,, */}
        {/* Now we will see how the data can be pass throw the components and reuse the component */}

        {/* <Category image={"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/50379f65f7b59622.png?q=100"} label="Top Offers"/>
       <Category image={"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/aecfaba5969b96dd.png?q=100"} label="Grocery"/>
       <Category image={"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f7b2a4eeb35a8c9f.png?q=100"} label="Fashion"/>
       <Category image={"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/50379f65f7b59622.png?q=100"} label="Top Offers"/>
      */}

        {/* these All about Props and Components */}
      </div>

      <div className="App">
        {/* Now we will se  Event Handlers */}
        <h1>Counter : {Counter}</h1>
        {/* <button onClick={() =>(Counter >= 10)? HandleAdd(0) : HandleAdd(1)}> ADD 1</button>
        <button onClick={() => (Counter === 0 ? setCounter(0) : HandleAdd(-1))}>
          Remove 1
        </button> */}

        {/* <button
          onClick={() => {
            if (Counter >= 10) {
              return;
            }
            setCounter(Counter + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            if (Counter <=  0) {
              return;
            }
            setCounter(Counter - 1);
          }}
        >
          Decrement
        </button> */}

        <button onClick={() => (Counter >= 10 ? HandleAdd(0) : HandleAdd(1))}>
          {" "}
          Increment
        </button>
        <button onClick={() => (Counter === 0 ? setCounter(0) : HandleAdd(-1))}>
          Decrement 1
        </button>

        {/* Now implement a task,,,if the counter number is even show Even else ODD */}

        <div>
          <h3>The Number is : {Counter % 2 === 0 ? "Even" : "ODD"} </h3>
        </div>
      </div>
    </>
  );
}

export default App;
