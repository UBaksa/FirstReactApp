import React from "react";
import "./TeamCard.css";

function TeamCard(props) {
  return (
    <div className="cardContainer">
      <p>{props.name}sdf</p>
      <p>{props.mathces}sdf</p>
      <p>{props.points}sdf</p>
      <button onClick={props.deleteTeam}>Izbrisi tim</button>
    </div>
  );
}

export default TeamCard;
