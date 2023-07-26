import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Projects() {
  const { id } = useParams();
  const navigateTO = useNavigate();
  return (
    <div>
      <h1>Project</h1>
      <h5>Projects {id}</h5>
      <button
        onClick={() => {
          alert("You are logged Out! Re-direct to Home Page!");
          navigateTO("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Projects;
