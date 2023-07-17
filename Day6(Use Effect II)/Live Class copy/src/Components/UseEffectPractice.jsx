import { useEffect, useState } from "react";

export const UseEffectPractice = () => {
  const [show, setShow] = useState(false);

  
  //with no dependency
  useEffect(() => {
    console.log("With no Dependency");

    return () => {
      console.log("With No dependency CleanUp Function");
    };
  });


  //    with [] empty array dependency
  useEffect(() => {
    console.log("With Empty Array Dependency");

    return () => {
      console.log("With Empty Array Dependency Clean Up Function");
    };
  }, []);


  //  with props or state value changes
  useEffect(() => {
    console.log("With Props or State Value Changes");

    return () => {
      console.log("With Props or state CleanUp Function");
    };
  }, [show]);

  return <></>;
};
