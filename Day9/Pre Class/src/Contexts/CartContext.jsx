// creating context box and providing the data

import { createContext, useState } from "react";

export const CartContext = createContext();

//here children is props,,, whatever we wrap inside the CartContextProvider, it will be the children, it could be component or html element or anything

const CartContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const HandleCartUpdate = (value) => {
    setCartCount(cartCount + value);
  };

  return (
    <>
      {/* <CartContext.Provider value={10}>{children}</CartContext.Provider> */}
      <CartContext.Provider value={{ cartCount, HandleCartUpdate }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export { CartContextProvider };

//value is the data here which we can use anywhere we want,,,
// lets see how we can update
