import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
function uaRandom(numberOfResidents) {
  const randomNumber = Math.floor(Math.random() * numberOfResidents);
  return `If your seniority number is ${randomNumber + 1} you must test today`;
}
let x = uaRandom(10);

function App() {
  const [count, setCount] = useState(x);

  return <h1>{count} </h1>;
}

export default App;
