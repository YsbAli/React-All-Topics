import styled from "styled-components";

export const MyButton = styled.button`
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  padding: 13px;
  text-align: center;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: blue;
    box-shadow: #000000 0 3px 8px;
  }
`;
