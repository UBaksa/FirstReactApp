import React from "react";
import "./PersonCard.css";
import { FaGithub } from "react-icons/fa";

function PersonCard(props) {
  return (
    <>
      <div className="card">
        <div className="img">
          <img src={props.imageLink}></img>
        </div>
        <h1 id="ime">
          {props.personName} {props.Lastname}
        </h1>
        <h2>
          {props.city},{props.state}
        </h2>
        <h2 style={{ color: "gray" }}>{props.years} years old</h2>
        <hr></hr>
        <p>
          {props.personName} {props.Lastname} is student from DUNP.
          {props.personName} is currently learning JavaScript,and C++.
          {props.personName} want to get job this summer as junior JS developer.
        </p>
        <a target="blank" href={props.github}>
          <FaGithub style={{ fontSize: "5rem" }}></FaGithub>
        </a>
      </div>
    </>
  );
}

export { PersonCard };
