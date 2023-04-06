import React from "react";
import "./App.css";
import Greeting from "./components/Greetings/Greeting.js";
import { Navbar } from "./components/Navbar/Navbar";
import { PersonCard } from "./components/PersonCard/PersonCard";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Greeting appName={"Our First App"} username={"Bakir Ujkanovic"} />
      <PersonCard
        personName={"Bakir"}
        Lastname={"Ujkanovic"}
        imageLink={"https://i.ytimg.com/vi/Ux5cQbO_ybw/maxresdefault.jpg"}
        state={"Serba"}
        city={"Novi Pazar"}
        years={"19"}
        github={"https://github.com/UBaksa"}
      ></PersonCard>
    </div>
    // <>- ovo je react fragment,kojim moze da se sve wrappuje!
  );
}
// ako zelimo npr da ubacimo ovaj navbar u app js i izmedju <Navbar></Navbar>,u navbar funckiji ubacimo argument props,i ubacimo dole posle {props.childer}
export default App;
