import express from "express";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const host = "localhost";
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(join(__dirname, "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(join(__dirname, "contact-me.html"));
});

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "404.html"));
});

app.listen(port, () => {
  console.log(`Server running live at http://${host}:${port}`);
});
