import "./App.css";
import Body from "./Components/Body";
import {Navbar} from './Components/Navbar'

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Body/>
      </div>
    </>
  );
};

export default App;
