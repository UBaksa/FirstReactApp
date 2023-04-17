import React, { useState } from "react";
import "./App.css";
import Greeting from "./components/Greetings/Greeting.js";
import { Navbar } from "./components/Navbar/Navbar";
import { PersonCard } from "./components/PersonCard/PersonCard";
import hotels from "./components/Common/hotels.json";
import teams from "./components/Common/teams.json";
import HotelCard from "./components/HotelCard/HotelCard";
import Form from "./components/Form/Form";
import TeamCard from "./components/TeamCard/TeamCard";

function App() {
  const poruke = [
    "Danas je subota ",
    "U subotu je lepo vreme",
    "Subota je dan za odmor",
    "Subota je dan za kupovinu",
    "Subota je dan za druzenje",
    "Subota je dan za kafu",
  ];
  const [arr, setArr] = useState(poruke);
  const reverseArr = () => {
    const _arr = [...arr];
    const reversed = _arr.reverse();
    setArr(reversed);
  };
  const teams = [
    {
      id: 1,
      name: "Arsenal",
      poeni: 73,
      matches: 30,
    },
    {
      id: 2,
      name: "Manchester City",
      poeni: 63,
      matches: 30,
    },
    {
      id: 3,
      name: "Newcastle",
      poeni: 56,
      matches: 30,
    },
    {
      id: 4,
      name: "Liverpool",
      poeni: 44,
      matches: 30,
    },
    {
      id: 5,
      name: "Manchester United",
      poeni: 43,
      matches: 30,
    },
  ];
  const [userInput, setUserInput] = useState({
    name: "",
    Lastname: "",
    email: "",
    phone: "",
  });
  return (
    <div className="App">
      <Navbar></Navbar>
      <Greeting appName={"Our First App"} username={"Bakir Ujkanovic"} />
      <PersonCard
        personName={"Bakir"}
        Lastname={"Ujkanovic"}
        imageLink={"https://i.ytimg.com/vi/Ux5cQbO_ybw/maxresdefault.jpg"}
        state={"Serbia"}
        city={"Novi Pazar"}
        years={"19"}
        github={"https://github.com/UBaksa"}
        linked={"https://rs.linkedin.com/"}
        facebook={"https://sr-rs.facebook.com/"}
        projectNumber={"5"}
        reps={"120"}
        unreps={"0"}
      ></PersonCard>
      <div className="hotels">
        {hotels.map((hotel) => (
          <HotelCard
            imageURL={hotel.imageURL}
            name={hotel.name}
            stars={hotel.stars}
            description={hotel.description}
            rating={hotel.rating}
            reviews={hotel.reviews}
          />
        ))}
      </div>
      <Form></Form>
      <div
        style={{
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button
          onClick={() => {
            reverseArr();
            console.log("okrenuo se niz");
          }}
        >
          Promeni raspored poruka
        </button>
        {arr.map((poruka) => (
          <p>{poruka}</p>
        ))}
      </div>
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
    </div>
    // <>- ovo je react fragment,kojim moze da se sve wrappuje!
  );
}
// ako zelimo npr da ubacimo ovaj navbar u app js i izmedju <Navbar></Navbar>,u navbar funckiji ubacimo argument props,i ubacimo dole posle {props.childer}
export default App;
