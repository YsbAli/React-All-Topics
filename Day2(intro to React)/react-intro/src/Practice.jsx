function Practice() {
  const Students = ["Ishan", "Yousub", "Asadul", "Baki", "Samim"];
  const Teachers = ["KR", "KB", "RP", "Soumika"];

  return (
    <>
      <div>
        <ul>
          {Students.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      </div>

      <div>
        <h5>
          {Teachers.map((item) => {
            return <Reuse name={item} />;
          })}
        </h5>
      </div>
    </>
  );
}
export default Practice;

const Reuse = (props) => {
  console.log(props);

  return <p className="reuse">{props.name}</p>;
};
