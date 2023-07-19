// import { useRef, useState } from "react";

// export const Refs = () => {
//   const [counter, setCounter] = useState(0);
//   //   const [x, setX] = useState(0);
//   const x = useRef(10); // {current : 10}

//   /*
//    this is use without setX useState
//       let x = 1;
//       console.log("The initial Value of X :", x);

// */

//   console.log("The initial Value of X :", x);

//   const HandleChangeX = () => {
//     // x = x + 1;    //this is without setX usestate

//     //using setX here
//     // setX(x + 1);

//     //using  Ref here
//     // x.current =x.current + 1;
//     x.current += 1;

//     console.log("after Click Value of X is: ", x);
//   };

//   return (
//     <>
//       <div>
//         <h2>Counter : {counter}</h2>
//         <button onClick={() => setCounter(counter + 1)}>ADD</button>
//         <button onClick={HandleChangeX}>Change X</button>
//         <button onClick={() => setCounter(counter * 0)}>Reset</button>
//       </div>
//     </>
//   );
// };

/*

when component is re-render x value become first value i.e 1;
but our goal is to store the value, don't lose it, when componnet is re-rendering,,,
to overcome the problem we use --> const[ x , setX] = useState(0) ,, by this x value will not change on re-rendering

... But the second goal will be failed ---> on changing value should not cause re-render
...that is why we use Ref --> useRef  
   const x = useRef(10)    --> initial value of x = 10;  const ref = useRef(10); ---> the initial value of ref is 10;
    it forms and object --> {current : 10}
    for change the value of x or ref , use --> x.current = x.current + 1 or ant other operations
    or ref.current = ref.current - 1;


*/

// --------------  Now see use case of Ref or real life example of Ref  ---------------------

// import { useEffect, useState, useRef } from "react";

// export const Ref2 = () => {
//   const [counter, setCounter] = useState(0);
//   const CounterRef = useRef(null);              //{current : null}

//   useEffect(() => {
//     StartInterval()
//   }, []);

//   const HandlePouse = () => {
//     clearInterval(CounterRef.current);
//   };

//   const StartInterval = () => {
//     console.log("Start Clicked");
//     CounterRef.current = setInterval(()=>{
//         setCounter((prev)=>prev + 1)
//     }, 100)
//   };

//   const HandleReset = () => {
//     console.log("Reset Clicked");
//    clearInterval(CounterRef.current)
//    setCounter(0)
//   };

//   return (
//     <>
//       <h2>Counter : {counter}</h2>
//       {/* <button onClick={()=>setCounter(counter + 1)}>ADD</button> */}
//       <button onClick={HandlePouse}>Pouse</button>
//       <button onClick={()=>StartInterval()}>Start</button>
//       <button onClick={HandleReset}>Reset</button>
//     </>
//   );
// };

//  Now See Anothet use Case of Ref ..with ref we can select any html element or any div or tags.
// So,we Can Create UseRef for scrolling Top to buttom or buttom to top
//Lets see





import { useRef } from "react";
import "./ref.css";

const ScrollRef = () => {
  const Buttom_Top = useRef(null);                            // null likhleo hbe na likhleo hbe
  const Top_Buttom = useRef();                                // we can skip null also
  const HtmlElement = useRef();

  // it will go to top,,,,from buttom to top 
  const GoTop = () => {
    // DivRef.current.scrollIntoView()                                       // scroll will go to the perticuler html tag or element
    Buttom_Top.current.scrollIntoView({ behavior: "smooth" }); //it will behave smooth

    // Buttom_Top.current.scrollIntoView({
    //   behavior: "smooth",
    //   block: "end",
    // //   inline: "nearest",
    // });
  };

  //it will to to buttom....from top to buttom

  const GoButtom = () => {
    console.log("Buttom Clicked");
    Top_Buttom.current.scrollIntoView({ behavior: "smooth" });
  };


  // by Clicking this button we are able to show only This text
  const SkipAll = () => {
    HtmlElement.current.innerHTML = "You Skipped All";
  };

  return (
    <>
      <div ref={HtmlElement}>
        <div ref={Buttom_Top}>
          <button onClick={GoButtom}>Scroll Buttom </button>
          <div className="Box1">Box1</div>
          <div className="Box2">Box2</div>
          <div className="Box3">Box3</div>
          <div className="Box4">Box4</div>
          <div className="Box5">Box5</div>
          <div className="Box6">Box6</div>
          <div className="Box7">Box7</div>
          <div className="Box8">Box8</div>
          <div className="Box2">Box9</div>
          <div className="Box3">Box10</div>
          <div className="Box4">Box11</div>
          <div className="Box5">Box12</div>
          <div className="Box6">Box13</div>
          <div className="Box7">Box14</div>
          <div className="Box8">Box15</div>
          <div ref={Top_Buttom} className="Box1">
            Box16
          </div>
          <button onClick={GoTop}>Scroll Top</button>
          <button onClick={SkipAll}>Skip All</button>
        </div>
      </div>
    </>
  );
};

export { ScrollRef };

//scrollIntoView link ---->

//https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
