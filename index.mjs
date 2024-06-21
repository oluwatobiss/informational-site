import { createServer } from "node:http";

const host = "localhost";
const port = 8080;

const server = createServer((req, res) => {
  const url = req.url;
});

server.listen(port, host, () => {
  console.log(`Server running live at http://${host}:${port}`);
});
