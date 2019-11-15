'use strict';

let http = require('http');

const server = http.createServer((req, res) => {
  res.write('hello\n');
  setTimeout(() => {
    debugger;
    res.end('world');
  }, 0);
});

server.listen(8888, () => {
  console.log('start server');
});