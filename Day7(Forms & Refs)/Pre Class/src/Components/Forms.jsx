import { useState } from "react";

export const Form = () => {
  const [formState, setFormState] = useState({
    username: "",
    age: "",
  });


  //collecting Data
  const handleChange = (e) => {
    // console.log(e);                     // e is here : -   SyntheticBaseEvent
    // console.log(e.target)               //e.target is the input box itself

    if(e.target.id === "username"){
        setFormState({
            ...formState,
            username : e.target.value
        })
    }


    if(e.target.id === "age"){
        setFormState({
            ...formState,
            age : e.target.value
        })
    }



  };

  //Storing Data or Printing Data or  Storing Forms Data in Backend Server
  const HandleForm = (e)=>{
    e.preventDefault();                           // it will not refresh yourselft
    console.log("Form Data", formState)           // printing the Data

    // fetch("backend Api", {POST})                // backend api with post methods


}



  return (
    <>
      <form action="" onSubmit={HandleForm}>
        {/* instead of id we can use name here to identify the perticuler inbox

            <input type="text" id="username" placeholder="Enter Username" /> 

             */}
        <input
          type="text"
          onChange={handleChange}
          id="username"
          placeholder="Enter Username"
        />
        <input
          type="number"
          onChange={handleChange}
          id="age"
          placeholder="Enter Your Age"
        />

        <input type="Submit" />
      </form>
    </>
  );
};
