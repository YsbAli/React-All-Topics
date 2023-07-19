import "./App.css";
import { Button } from "./Components/Button";
import { Flex } from "./Components/Flex";
import { Theme } from "./Components/Theme";

const App = () => {
  return (
    <>
      <div className="App">
        <h2>Styled Components</h2>
        {/* <Button  children={"Sign In"}/>
        <Button children={"Sing Up"}/> */}

        {/* we can pass like this also ... so, */}
        {/* if we write like this <Button></Button>  --> it will automatically take its children */}
        {/* 
        <Button
          onClick={() => {
            alert("Clicked on Sign In Button");
          }}
        >
          Sign In
        </Button> */}

        {/* <Button
          onClick={() => {
            alert("Clicked on Click Me Button");
          }}
        >
          Click Me
        </Button> */}

        {/* <Button>Sign In</Button>
        <Button>Register</Button> */}

        {/* Flex Components */}
        {/* 
        <Flex>
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
        </Flex> */}
        <Theme />
      </div>
    </>
  );
};

export default App;
