import React, { useState } from "react";
import "./App.css";
import Greeting from "./components/Greetings/Greeting.js";
import { Navbar } from "./components/Navbar/Navbar";
import { PersonCard } from "./components/PersonCard/PersonCard";
import hotels from "./components/Common/hotels.json";
import HotelCard from "./components/HotelCard/HotelCard";

function App() {
  const [name, setName] = useState("");
  console.log(name);
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
      <form
        onSubmit={function (event) {
          event.preventDefault();
        }}
      >
        <label htmlFor="firstName">Unesite Vase ime </label>
        <input
          type="text"
          id="firstName"
          name=""
          // innerText={"ime"}---------------------> alternativa
          value={"ime"}
          onChange={function (event) {
            setName(event.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="lastName">Unesite Vase prezime </label>
        <input type="text" id="lastName" name="lastName" required></input>
        <br></br>
        <label htmlFor="mail">Unesite Vasu email adresu </label>
        <input type="mail" id="mail" name="mail" required></input>
        <br></br>
        <label htmlFor="phone">Unesite Vas broj telefona </label>
        <input type="tel" id="phone" name="telnumber" required></input>
        <br></br>
        <button type="submit">Potvrdi</button>
      </form>
    </div>
    // <>- ovo je react fragment,kojim moze da se sve wrappuje!
  );
}
// ako zelimo npr da ubacimo ovaj navbar u app js i izmedju <Navbar></Navbar>,u navbar funckiji ubacimo argument props,i ubacimo dole posle {props.childer}
export default App;
