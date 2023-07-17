// import "./App.css";

// function App() {
//   const Data = 'Ishan'
//   return (
//     <>
//       <div>
//         <FirstChild data = {Data} />

//         <SecondChild  pdata={Data}/>
//       </div>
//     </>
//   );
// }

// export default App;

// const FirstChild = ({data}) => {
//   return (
//     <>
//       <div>
//         <h1>Hello {data}</h1>
//       </div>
//     </>
//   );
// };

// const SecondChild = ({pdata}) => {
//   return (
//     <>
//       <div>
//         <h2>Hello !! coming From Parent Components : {pdata}</h2>
//       </div>
//     </>
//   );
// };




// Child to Parent



// import "./App.css";

// function App() {

//   const GetData = (data)=>{
//     console.log("Data is getting", data)
//   }
//   return (
//     <>
//       <div>
//         <FirstChild data = {GetData}/>

//       </div>
//     </>
//   );
// }

// export default App;

// const FirstChild = ({data}) => {
//   const Cdata = 'Child Data'
//   data(Cdata)

//   return (
//     <>
//       <div>
//         <h1>Hello</h1>
//       </div>
//     </>
//   );
// };

// const SecondChild = () => {
//   return (
//     <>
//       <div>
//         <h2>Hello ! coming From Parent Components : </h2>
//       </div>
//     </>
//   );
// };




// Child to Child 









import { useState } from "react";
import "./App.css";

function App() {
  const [massege, setMessage] = useState('')

  const GetData = (data)=>{
    console.log("Data is getting", data)
    setMessage(data)
  }
  return (
    <>
      <div>
        <FirstChild data = {GetData}/>
        <SecondChild Msg = {massege}/>

      </div>
    </>
  );
}

export default App;

const FirstChild = ({data}) => {
  const Cdata = 'Child Data'
  data(Cdata)

  return (
    <>
      <div>
        <h1>Hello</h1>
      </div>
    </>
  );
};

const SecondChild = ({Msg}) => {
  console.log("Got Data from Sibling", Msg)          //but here Msg is empty ,,,,so we need to set the message data using setMessage()
  return (
    <>
      <div>
        <h2>Hello ! coming From Parent Components : {Msg}</h2>
      </div>
    </>
  );
};
  