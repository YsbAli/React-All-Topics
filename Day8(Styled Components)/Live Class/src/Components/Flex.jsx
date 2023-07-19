import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;

  /* & div {
    color: red;
    border: 2px solid blue;
  } */

  & div:nth-child(odd) {
    color: red;
    border: 2px solid blue;
  }
`;

export { Flex };
