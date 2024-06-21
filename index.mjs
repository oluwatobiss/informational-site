import { createServer } from "node:http";
import { readFile } from "node:fs";
import { URL } from "node:url";

const host = "localhost";
const port = 8080;

const server = createServer((req, res) => {
  const pathname = new URL(req.url, `http://${host}:${port}`).pathname;

  readFile(
    `.${pathname === "/" ? "/index.html" : pathname}`,
    (err, content) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        readFile("./404.html", (err, content) => {
          res.end(content);
        });
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  );
});

server.listen(port, host, () => {
  console.log(`Server running live at http://${host}:${port}`);
});
