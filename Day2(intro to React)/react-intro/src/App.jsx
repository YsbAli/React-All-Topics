// import Navbar from "./Components/Navbar"

import "./app.css";

function App() {
  const FavPlace = "Cooch Behar";
  const Age = 17;
  const Skills = ["React", "Node", "DSA", "Design", "Animation"];
  const Hobbies = [
    "Travelling",
    "Reading",
    "Tech-Learning",
    "Football",
    "Meeting New People",
  ];

  const SEMESTER_ONE = ["ADSA", "ADBMS", "ACN", "ACOA"];

  const Second_Semester = ["OOPS with JAVA", "TOC", "AOS", "ACG"];

  return (
    <>
      <div>
        <h1>my fav place is : {FavPlace} </h1>
        <h4>
          your age is {Age} So, You {Age > 18 ? "Can vote" : "Not Eligable"}{" "}
        </h4>
      </div>

      {/* We will show the esiest path to print the array element */}
      <div>
        {/* <h3>My Skills Are : {Skills}</h3>             ReactNodeDSADesignAnimation */}
        {/* <ul>
          {
          Skills.map((e)=>{
          return <li>{e}</li>
        })
        }
        </ul> */}
      </div>

      <div>
        <ul className="blueText">
          {" "}
          My Skills Are :{" "}
          {Skills.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      </div>

      <div>
        <ul className="redText">
          My Hobbies Are :{" "}
          {Hobbies.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>

      {/* <SkillComponents />
      <SkillComponents />
      <SkillComponents />
      <SkillComponents /> */}
      {/* <SkillComponents></SkillComponents>   this Both are same */}

      {/*  */}
      {/* <SkillComponents age="23" name="Ishan"/>     */}

      {/* Now I will Show My new Results with the SkillComponent */}

      <div>
        {/* Here SkillComponents will call four time because SEMESTER_ONE has Four Element */}
        <h1> My First Semester Subjects Are</h1>
        {SEMESTER_ONE.map((item) => {
          return <SkillComponents sub={item} />;
        })}
      </div>

      <div>
        <h2>My Second Semester Subjects Are: </h2>
        {Second_Semester.map((e) => {
          return <SkillComponents sub={e} />;
        })}
      </div>
    </>
  );
}

//Creating Components

function SkillComponents(props) {
  // console.log("Props Are:", props)            //For Line Number 66 ,,, so props will return an object ---> Props Are ->{age:23, name:Ishan}
  console.log(props);
  return <p className="comp">Semester One Subjects Are : {props.sub}</p>;
}

export default App;


