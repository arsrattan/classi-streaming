const express = require('express');
const http = require('http');

const initSocket = require('./utils/socket');

const app = express();
const server = http.createServer(app);
const PORT = process.env.port || 8000;

initSocket(server).then(server.listen(PORT, () => console.log(`HTTP Server now listening on port ${PORT}`)));
