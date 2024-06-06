/** @format */

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {});

app.post("/submit", (req, res) => {});

const numLetters =
  req.body["fName"].length + removeEventListener.body["lName"].length;
res.render("solution.ejs");
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
