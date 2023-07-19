import styled from "styled-components";


const Wrapper = styled.div`
  border: 1px solid red;
  background-color: teal;

  h1 {
    color: blue;
  }

  h2 {
    color: black;

    @media all and (max-width: 620px) {
      color: green;
    }
  }
`;

const A = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: yellow;
`;

// we can styled based on  some logic also by props...

// color: ${(props) => props.color ="red"};
// color: ${(props) => props.color ==='red' ? 'red' :'blue'}                    //we can write some logic

const A2 = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: ${(props) => (props.color === "red" ? "red" : "blue")};
`;

export const StyledComponents = () => {
  return (
    <>
      <div>
        <Wrapper>
          <h1>Hello Styled-Components</h1>
          <A href="https://www.google.com"> Google </A>
          <A2 color="white" href="https://youtube.com">
            Youtube
          </A2>
          <h2>This is h2 tag</h2>
        </Wrapper>
      </div>
    </>
  );
};
