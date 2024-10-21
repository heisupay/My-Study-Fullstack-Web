/** @format */

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react";
import ReactDOM from "react-dom";


// var react = require("react");
// var reactdom = require(<h1>Hello Supay</h1>, document.getElementById("root"));

// reactdom.render.createElement("h1");
// h1.innerHTML = "Hello Supay!";
// document.getElementById("root").appendChild(h1);

ReactDOM.render(
  <div>
    <h1> Hello Supay!</h1>
    <p>This os a paragraph</p>
  </div>,
  document.getElementById("root")
);