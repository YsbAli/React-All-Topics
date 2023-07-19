import { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    Username: "",
    age: "",
    email: "",
    password:""
  });

  /*
  const HandleChange = (e) => {
    console.log(e.target);
    console.log(e.target.id);



    if (e.target.id === "Username") {
      setFormData({
        ...formData,
        Username: e.target.value,
      }); 
    }
    if (e.target.id === "age") {
      setFormData({
        ...formData,
        age: e.target.value,
      });
    }

  };

  */

  //   but the above function / process is very long, we need shorts steps,,,

  //   shorts form is :-

  const HandleChange = (e) => {
    // const {id, value} = e.target;

    // const id = e.target.id;
    // const value = e.target.value;

    setFormData({
      ...formData,
      [e.target.id]: e.target.value, //can do like this or below line code
      //   [id]: value,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    //this is for backend api,,, it will save this location
    fetch("http://localhost:3000/formData", {
      method : "POST",
      headers: {
        "content-type" : "application/json",
      },
      body : JSON.stringify(formData)
    })


  };
 
  return (
    <>
      <div>
        <form action="" onSubmit={HandleSubmit}>
          <input
            type="text"
            onChange={HandleChange}
            value={formData.Username}                       // change the value of inputbox from outside
            id="Username"                                  //id or name is for identify the input box
            placeholder="Type Username"
          />
          <input
            type="number"
            onChange={HandleChange}
            value={formData.age}
            id="age"
            placeholder="Type age"
          />

          <input
            type="email"
            onChange={HandleChange}
            value={formData.email}
            id="email"
            placeholder="Type email"
          />
          
          <input
            type="password"
            onChange={HandleChange}
            value={formData.password}
            id="password"
            placeholder="Type Password"
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};
