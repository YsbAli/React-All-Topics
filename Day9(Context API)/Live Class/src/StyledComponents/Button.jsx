import styled from "styled-components";

export const MyButton = styled.button`
  padding: 8px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;

  &:hover {
    background-color: #7070ff;
  }

  border: none;
  border-radius: 4px;
  padding: 13px;
  text-align: center;
  /* background: #143f6b; */
  /* color: #f6f54d; */
  background: ${(props)=>props.theme === "Light" ? "#f6f54D" : "#143f6b"};
  color: ${(props)=> props.theme ==="Light" ? "#143f6b" : "#f6f54D"};
  cursor: pointer;
  margin: 5px;

  //& refers to the current element  

  &:hover {
    background-color: blue;
    box-shadow: #000000 0 3px 8px;
  }




`;
