const express = require('express')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello, world!');
});

server.get('/jabberwocky', (req, res) => {
    res.send('<h1>FRABJOUS<h1>');
});


server.post('/', (req, res) => {
    res.json(req.body);
});

module.exports = server;