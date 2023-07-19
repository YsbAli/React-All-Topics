// import "./Button.css";

// export const Button = ({ children, onClick }) => {
//   return (
//     <>
//       <button onClick={onClick} className="btn">
//         {children}
//       </button>
//     </>
//   );
// };

// aivabe amra annek gulo props nite pari for perticuler works,,,,
// but this is not a fair way,,, so there styled-components comes into the pictures
//but styled-components we can do as many things as we can

// Lets See

import styled from "styled-components";

const Button = styled.button`
  // here all the properties of button will present in Botton Component
  border: none;
  border-radius: 4px;
  padding: 10px;
  padding-top: 8px;
  text-align: center;
  background: #143f6b;
  color: #f6f54d;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: blue;
    box-shadow: #000000 0 3px 8px;
  }
`;

export { Button };
