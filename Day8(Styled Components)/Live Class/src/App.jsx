import "./App.css";
import { Button } from "./Components/Button";

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

        
        <Button
          onClick={() => {
            alert("Clicked on Click Me Button");
          }}
        >
          Click Me
        </Button>

        <Button>Sign In</Button>
        <Button>Register</Button>
      </div>
    </>
  );
};

export default App;
