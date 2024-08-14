import express from "express";
import { readFile } from "node:fs";

const app = express();
const host = "localhost";
const port = 3000;

app.get("/", (req, res) => {
  function showContent(err, content) {
    if (err) {
      return readFile("./404.html", (err, content) => {
        res.status(404).end(content);
      });
    }
    res.end(content);
  }
  readFile("index.html", showContent);
});

app.get("/about", (req, res) => {
  function showContent(err, content) {
    if (err) {
      return readFile("./404.html", (err, content) => {
        res.status(404).end(content);
      });
    }
    res.end(content);
  }
  readFile("about.html", showContent);
});

app.get("/contact-me", (req, res) => {
  function showContent(err, content) {
    if (err) {
      return readFile("./404.html", (err, content) => {
        res.status(404).end(content);
      });
    }
    res.end(content);
  }
  readFile("contact-me.html", showContent);
});

app.listen(port, () => {
  console.log(`Server running live at http://${host}:${port}`);
});
