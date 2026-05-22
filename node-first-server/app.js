// const http = require('http');
// http.createServer();

import { createServer } from "http";

const server = createServer((req, res) => {
  console.log("Request received", req.url, req.method, req.headers);
  //process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html><body><h1>Hello World</h1></body></html>");
  res.end();
});

server.listen(3000);
