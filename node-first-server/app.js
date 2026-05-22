// const http = require('http');
// http.createServer();

import { createServer } from 'http';

const server = createServer((req, res) => {
  console.log("Request received", req);
});

server.listen(3000);