import React from "react";
import "./PersonCard.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function PersonCard(props) {
  return (
    <>
      <div className="card">
        <div className="img">
          <img src={props.imageLink}></img>
          <h1 id="ime">
            {props.personName} {props.Lastname}
          </h1>
          <h2>
            {props.city},{props.state}
          </h2>
          <h2 style={{ color: "gray" }}>{props.years} years old</h2>
        </div>
        <br></br>
        <p style={{ marginLeft: "-0.5rem" }} id="pe">
          Projects
        </p>
        <p id="pe">+Rep</p>
        <p id="pe">-Rep</p>
        <br></br>
        <h5 style={{ marginLeft: "0.1rem" }} id="brojevi">
          {props.projectNumber}
        </h5>
        <h5 id="brojevi">{props.reps}</h5>
        <h5 style={{ marginRight: "0.7rem" }} id="brojevi">
          {props.unreps}
        </h5>
        <hr></hr>
        <p>
          {props.personName} {props.Lastname} is student from DUNP.
          {props.personName} is currently learning JavaScript,and C++.
          {props.personName} want to get job this summer as junior JS developer.
        </p>
        <hr></hr>
        <a target="blank" href={props.github}>
          <FaGithub style={{ fontSize: "2rem" }}></FaGithub>
        </a>
        <a target="blank" href={props.linkedin}>
          <FaLinkedin
            style={{ fontSize: "2rem", marginLeft: "1rem" }}
          ></FaLinkedin>
        </a>
        <a target="blank" href={props.facebook}>
          <FaFacebookF
            style={{ fontSize: "2rem", marginLeft: "1rem" }}
          ></FaFacebookF>
        </a>
      </div>
    </>
  );
}

export { PersonCard };
