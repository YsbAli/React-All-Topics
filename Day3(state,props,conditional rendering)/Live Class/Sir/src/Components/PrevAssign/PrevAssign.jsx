import "./prev.css";

const PrevAssign = () => {
  const arr = ["Ishan", "Yousub", "Annynomouse", "BlackMonkey"];

  // now I want perticuler style for perticuler item,, so to that we have to declared an arr of object, and mention the name of the item and item style

  const Arr2 = [
    { name: "Samsung", style: "square" },
    { name: "Motorola", style: "circle" },
    { name: "Apple", style: "apple" },
  ];

  // For reusuable List or li
  function List({ style, name }) {
    return <li>{name}</li>;
  }

  return (
    <>
      <div>
        <h3>Previous Assignment</h3>
        <div>
          {arr.map((el) => {
            return (
              <li className={`${el % 2 === 0 ? "squrelist" : "circlelist"}`}>
                {el}
              </li>
            );
          })}
        </div>
        <h5>Now do style for perticuler Data</h5>
        <div>
          {Arr2.map((el) => {
            return <li className={el.style}>{el.name}</li>;
          })}
        </div>
      </div>
    </>
  );
};

export { PrevAssign };
