import express from 'express';
import GameController from './views/Utils/GameController'

const path = require('path');
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = 4000;

// Initialisation du jeu

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

        //TODO Gestion des rooms pour les client
        //client.join(client.room)
        const gameController = new GameController("test", client.username, "test2")



        console.log('-------------------');
        console.log(`Username : ${client.username}`);
        console.log(`GameID : ${client.room}`);
        console.log(`gameController : ${gameController.player1}`)
        console.log('-------------------');

        socket.emit('get-player-name', gameController.thisTurnPlayer)

    })

    socket.on('check-room-info', client => {
        //TODO Check id de salle
        const requestedRoom = client;
        const allRooms = socket.rooms;
        let isDuplicate = false;

        socket.emit('check-room-info', true)
    })
})



server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});