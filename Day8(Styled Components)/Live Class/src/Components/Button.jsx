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
  padding: 13px;
  text-align: center;
  /* background: #143f6b; */
  /* color: #f6f54d; */
  background: ${(props) => (props.theme === "Light" ? "#f6f54D" : "#143f6b")};
  color: ${(props) => (props.theme === "Light" ? "#143f6b" : "#f6f54D")};
  cursor: pointer;
  margin: 5px;

  //& refers to the current element

  &:hover {
    background-color: blue;
    box-shadow: #000000 0 3px 8px;
  }
`;

export { Button };
