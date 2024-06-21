import { createServer } from "node:http";
import { readFile } from "node:fs";
import { URL } from "node:url";

const host = "localhost";
const port = 8080;

const server = createServer((req, res) => {
  const pathname = new URL(req.url, `http://${host}:${port}`).pathname;
  const filePath = `.${pathname === "/" ? "/index" : pathname}.html`;

  function showContent(err, content) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return readFile("./404.html", (err, content) => {
        res.end(content);
      });
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
  }

  readFile(filePath, showContent);
});

server.listen(port, host, () => {
  console.log(`Server running live at http://${host}:${port}`);
});
