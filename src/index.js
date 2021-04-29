import express from 'express';

const path = require('path');
const app = express();
const io = require('socket.io')(4001);
const port = 4000;

// Initialisation du jeu
const board = [["", "", ""], ["", "", ""], ["", "", ""]];
const player = [
    {name: "player1", symbol: "O", hasWon: false},
    {name: "player2", symbol: "X", hasWon: false}
];
const gameState = false;




app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

io.sockets.on("connection", socket => {
    console.log('client connected');
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});