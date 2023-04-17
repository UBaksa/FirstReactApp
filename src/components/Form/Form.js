import React from "react";
import { useState } from "react";
import "./Form.css";
function Form() {
  const poruke = [
    "Danas je subota ",
    "U subotu je lepo vreme",
    "Subota je dan za odmor",
    "Subota je dan za kupovinu",
    "Subota je dan za druzenje",
    "Subota je dan za kafu",
  ];
  const [userInput, setUserInput] = useState({
    name: "",
    Lastname: "",
    email: "",
    phone: "",
  });
  return (
    <div className="forma">
      <form
        onSubmit={function (event) {
          event.preventDefault();
          console.log({ userInput });
        }}
      >
        <label htmlFor="firstName">Unesite Vase ime </label>
        <input
          type="text"
          id="firstName"
          name=""
          // innerText={"ime"}---------------------> alternativa
          value={userInput.name}
          onChange={function (event) {
            setUserInput((prev) => ({ ...prev, name: event.target.value }));
          }}
        ></input>
        <br></br>
        <label htmlFor="lastName">Unesite Vase prezime </label>
        <input
          value={userInput.Lastname}
          onChange={(event) => {
            setUserInput((prev) => ({ ...prev, Lastname: event.target.value }));
          }}
          type="text"
          id="lastName"
          name="lastName"
          required
        ></input>
        <br></br>
        <label htmlFor="mail">Unesite Vasu email adresu </label>
        <input
          value={userInput.email}
          onChange={(event) => {
            setUserInput((prev) => ({ ...prev, email: event.target.value }));
          }}
          type="mail"
          id="mail"
          name="mail"
          required
        ></input>
        <br></br>
        <label htmlFor="phone">Unesite Vas broj telefona </label>
        <input
          value={userInput.phone}
          onChange={(event) => {
            setUserInput((prev) => ({ ...prev, phone: event.target.value }));
          }}
          type="tel"
          id="phone"
          name="telnumber"
          required
        ></input>
        <br></br>
        <button type="submit">Potvrdi</button>
      </form>
    </div>
  );
}

export default Form;
