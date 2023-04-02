import React from "react";
import "./App.css";
import Greeting from "./components/Greetings/Greeting.js";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1
          style={{ marginLeft: "5rem", color: "#ffffff", fontFamily: "Arial" }}
        >
          Logo
        </h1>
      </header>
      <Greeting appName={"Our First App"} username={"Bakir Ujkanovic"} />
    </div>
    // <>- ovo je react fragment,kojim moze da se sve wrappuje!
  );
}

export default App;
