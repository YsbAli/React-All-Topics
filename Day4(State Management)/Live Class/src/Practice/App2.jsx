// // Parent to child

// const App2 = () => {
//   const data = "Hello Ishan! its for FirstComponents";
//   const Data2 = "Hello ISHAN! its for Second Components";

//   return (
//     <>
//       <FirstChild Data={data} />
//       <SecondChild data2={Data2} />
//     </>
//   );
// };

// export default App2;

// export const FirstChild = ({ Data }) => {
//   return (
//     <>
//       <h1>FirstChild Component: {Data}</h1>
//     </>
//   );
// };

// export const SecondChild = ({ data2 }) => {
//   return (
//     <>
//       <h1>Second Component: {data2}</h1>
//     </>
//   );
// };

// // Child  to Parent

// const App = () => {

//   const GetData = (data) => {
//     console.log(data);
//   };

//   return (
//     <>
//       <First  dataFn = {GetData}/>
//     </>
//   );
// };

// export default App;

// export const First = ({dataFn}) => {
//   const Data = "Data From Child Component!";
//   // data(Data)

//   return (
//     <>
//       <h1>First Component :</h1>

//      <button onClick={()=>{
//       dataFn(Data)
//      }}>ChildData</button>

//     </>
//   );
// };

// // Child to Child

// import { useState } from "react";

// const App = () => {
//   const [passData, setPassData] = useState("");

//   const ChildData = (data) => {
//     console.log("Came Data in Parent !", data);
//     setPassData(data);
//   };

//   return (
//     <>
//       <FirstChild FsDataFn={ChildData} />
//       <SecondChild data={passData} />
//     </>
//   );
// };

// export default App;

// export const FirstChild = ({ FsDataFn }) => {
//   const data = "sample data! from First Child." ;
//   const HandleSendData = () => {
//     FsDataFn(data);
//   };

//   return (
//     <>
//       <h1>FirstChild</h1>
//       <button onClick={HandleSendData}>Send Data</button>
//     </>
//   );
// };

// export const SecondChild = ({ data }) => {
//   console.log("Data came From Sibling", data)
//   return (
//     <>
//       <h1>SecondChild: {data}</h1>
//     </>
//   );
// };
