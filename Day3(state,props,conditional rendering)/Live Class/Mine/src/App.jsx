import { Category } from "./Components/Category/Category";
import "./App.css";

function App() {
  const Items = [
    {
      img: "https://rukminim1.flixcart.com/image/200/200/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
      title: "IPad Iphone",
    },
    {
      img: "https://rukminim1.flixcart.com/image/200/200/xif0q/mobile/r/k/h/g73-5g-paux0023in-motorola-original-imagngjh7epkhqdg.jpeg?q=70",
      title: "Moto G73",
    },
    {
      img: "https://rukminim1.flixcart.com/image/200/200/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
      title: "IPad Iphone",
    },
    {
      img: "https://rukminim1.flixcart.com/image/200/200/xif0q/mobile/r/k/h/g73-5g-paux0023in-motorola-original-imagngjh7epkhqdg.jpeg?q=70",
      title: "Moto G73",
    },
    {
      img: "https://rukminim1.flixcart.com/image/200/200/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
      title: "IPad Iphone",
    },
  ];

  return (
    <>
      <div className="App">
        {/* <h2>This is my practice Section</h2> */}
        {Items.map((el) => (
          <Category image={el.img} label={el.title} />
        ))}
      </div>
    </>
  );
}

export default App;
