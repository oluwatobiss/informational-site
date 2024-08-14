import express from "express";
import { readFile } from "node:fs";

const app = express();
const host = "localhost";
const port = 3000;
const errorMessage = (code) =>
  `<p><strong>${code} ERROR:</strong> Sorry, we cannot read the file!</p>`;

app.get("/", (req, res) => {
  function showContent(err, content) {
    err && res.send(errorMessage(err.code));
    res.end(content);
  }
  readFile("./index.html", showContent);
});

app.get("/about", (req, res) => {
  function showContent(err, content) {
    err && res.send(errorMessage(err.code));
    res.end(content);
  }
  readFile("./about.html", showContent);
});

app.get("/contact-me", (req, res) => {
  function showContent(err, content) {
    err && res.send(errorMessage(err.code));
    res.end(content);
  }
  readFile("./contact-me.html", showContent);
});

app.get("*", (req, res) => {
  function showContent(err, content) {
    err && res.send(errorMessage(err.code));
    res.end(content);
  }
  readFile("./404.html", showContent);
});

app.listen(port, () => {
  console.log(`Server running live at http://${host}:${port}`);
});
