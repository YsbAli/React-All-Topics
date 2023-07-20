import { createContext, useState } from "react";

export const AllContext = createContext();

export const AllContextProvider = ({ children }) => {
  // const CartData = 10;
  const [cartCount, setCartCount] = useState(0);

  const HandleCartCount = (value) => {
      // console.log("clicked")
      // console.log(cartCount)
    setCartCount(cartCount + value);
  };

  return (
    <>
      {/* <AllContext.Provider value={CartData}>{children}</AllContext.Provider> */}
      <AllContext.Provider value ={{ cartCount, HandleCartCount }}>
        {children}
      </AllContext.Provider>
    </>
  );
};
