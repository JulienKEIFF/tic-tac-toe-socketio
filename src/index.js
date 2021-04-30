import express from 'express';

const path = require('path');
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = 4000;

// Initialisation du jeu
const board = [["", "", ""], ["", "", ""], ["", "", ""]];
const player = [
    {name: "player1", symbol: "O", hasWon: false},
    {name: "player2", symbol: "X", hasWon: false}
];
const gameState = false;

app.use(express.static(path.join(__dirname, '..', 'src', 'views')));
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

io.sockets.on('connection', socket =>{
    console.log(`Connecté au client ${socket.id}`)

    socket.on('join', client => {
        //TODO Gestion des rooms pour les clients

        console.log('-------------------');
        console.log(`Username : ${client.username}`);
        console.log(`GameID : ${client.room}`);
        console.log('-------------------');

    })
})



server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});