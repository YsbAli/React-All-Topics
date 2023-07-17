//Lets create a automatic count-down timer app

import { useEffect, useState } from "react";

export const Countdown = () => {
  const [count, setCount] = useState(10);

  // this will create a infinite loop we cant stop this ... but we need to render only once, so we will use  useEffect hook here...
  // setInterval(() => {
  //   setCount(count - 1);
  // }, 1000);

  //  but this useEffect will run only once and count will stop at 9

  //   useEffect(() => {
  //     setInterval(() => {
  //       setCount(count - 1);
  //     }, 1000);
  //   }, []);





//   all the notes is in the notebook

  useEffect(() => {
    let id = setInterval(() => {
      setCount((PrevCount) => {
        console.log("Setting State", PrevCount)
        if (PrevCount <= 0) {
        //   return "count Value is 0";
        clearInterval(id)
          return 0
        }
        return PrevCount - 1;
      });
    }, 1000);

   //clean up function because  after unmounter we need to stop the setInterval  

    return function cleanup(){
        clearInterval(id)
    }
  }, []);

  // this will work in sent otp aswell




  // this is for simple counter ,,,,, here count recieve the previous render value
  //this still work,,,

  //   const handleCount = () => {
  //     setCount((count) => {
  //       return count + 1;
  //     });
  //   };





  return (
    <>
      <div>
        {/* <h2>Count : {count}</h2> */}
        <h4>Count : {count}</h4>
        {/* <button onClick={handleCount}>Add 1</button> */}
      </div>
    </>
  );
};
