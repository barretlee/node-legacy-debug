const net = require('net');

const socket = net.createConnection(5858, '127.0.0.1');

socket.on('data', (data) => {
  console.log(data.toString())
});

socket.on('error', (err) => {
  console.log(err);
});

process.stdin.on('data', (data) => {
  const json = data.toString();
  socket.write(`Content-Length: ${Buffer.byteLength(json, 'utf8')}\r\n\r\n${json}`, 'utf8');
});
