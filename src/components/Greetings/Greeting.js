import React from "react";
import "./Greeting.css";

function Greeting(props) {
  console.log(props);
  console.log(props.appName);
  return (
    <>
      <div className="welcome">
        <h1 style={{ color: "white" }}>Dobro dosli u {props.appName} !</h1>
        <h3
          style={{ fontSize: "1.5rem", color: "white", marginBottom: "1rem" }}
        >
          Unesite Vase ime
        </h3>
        <p style={{ color: "gainsboro", fontWeight: "Bolder" }}>
          Vase ime je:{props.username}
        </p>
      </div>
    </>
  );
}

export default Greeting;
