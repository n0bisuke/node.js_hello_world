'use strict'

const HTTP = require('http');
const PORT = process.env.PORT || 3001;

HTTP.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js\n');
}).listen(PORT);