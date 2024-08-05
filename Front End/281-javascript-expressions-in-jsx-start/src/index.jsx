/** @format */

import React from "react";
import ReactDOM from "react-dom";

const fName = "Supay";
const lName = "Yu";
const num = 7;
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}! World!</h1>
    <p>Your lucky number is {num}</p>
    <p>Coppyright {year}</p>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
