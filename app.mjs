import express from "express";
import { readFile } from "node:fs";

const app = express();
const host = "localhost";
const port = 3000;
const errorMessage = (code) =>
  `<p><strong>${code} ERROR:</strong> Sorry, we cannot read the file!</p>`;
let response = null;

function showContent(err, content) {
  err && response.send(errorMessage(err.code));
  response.end(content);
}

app.get("/", (req, res) => {
  response = res;
  readFile("./index.html", showContent);
});

app.get("/about", (req, res) => {
  response = res;
  readFile("./about.html", showContent);
});

app.get("/contact-me", (req, res) => {
  response = res;
  readFile("./contact-me.html", showContent);
});

app.get("*", (req, res) => {
  response = res;
  readFile("./404.html", showContent);
});

app.listen(port, () => {
  console.log(`Server running live at http://${host}:${port}`);
});
