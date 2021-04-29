import express from 'express';

const http = require('http');
const socketIo = require("socket.io");

const app = express();
const server = http.Server(app).listen(4001);
const io = socketIo(server);
const port = 4000;

const grid =  [["","",""],["","",""],["","",""]]

app.get('/', (req, res) => { res.send('Tic Tac Toe'); })

io.sockets.on("connection", socket => {
    console.log('client connected')
});





app.listen(port, () => { console.log(`App listening at http://localhost:${port}`); });