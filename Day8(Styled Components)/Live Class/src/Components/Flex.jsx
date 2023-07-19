import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;

  & div {
    color: red;
    border: 1px solid teal;
    background: ${(props) => (props.theme === "Light" ? "#f6f54D" : "#143f6b")};
    color: ${(props) => (props.theme === "Light" ? "#143f6b" : "#f6f54D")};
  }

  & h3 {
    border: 1px solid grey;
    background: ${(props) => (props.theme === "Light" ? "#f6f54D" : "#143f6b")};
    color: ${(props) => (props.theme === "Light" ? "#143f6b" : "#f6f54D")};
  }

  /* & div:nth-child(odd){
    color: red;
    border: 1px solid teal ;
  } */
`;

export { Flex };
