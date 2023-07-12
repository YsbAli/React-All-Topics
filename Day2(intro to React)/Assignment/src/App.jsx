import "./App.css";
import { Catagory } from "./components/Components";

function App() {
  const mid = ["Services", "Projects", "About"];
  const mobarr = [
    { name: "Samsung", style: "square" },
    { name: "HTC", style: "square" },
    { name: "Micromax", style: "disc" },
    { name: "Apple", style: "circle" },
  ];
  const osarr = ["Android", "Blackberry", "iPhone", "Windows Phone"];

  return (
    <div className="App">
      <div className="nav">
        <div className="logo">
          <img
            className="image"
            src="https://img.freepik.com/free-vector/bakery-badges-vintage-style_23-2147509937.jpg?size=338&ext=jpg&ga=GA1.2.2097566864.1649502891"
            alt=""
          />
        </div>
        <div className="links">
          {mid.map((e) => {
            return <div className="txt">{e}</div>;
          })}
        </div>
        <button className="btn">connect</button>
      </div>
      <div className="body">
        <div className="os">
          <h1>Mobile Operating System</h1>
          {osarr.map((e) => {
            return <Catagory method={e} />;
          })}
        </div>
        <div className="mob">
          <h1>Mobile Manufacturers</h1>
          {mobarr.map((e) => {
            return <li className={e.style}>{e.name}</li>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
