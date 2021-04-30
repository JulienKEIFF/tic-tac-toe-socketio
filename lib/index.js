"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const path = require('path');

const app = (0, _express.default)();

const server = require('http').createServer(app);

const io = require('socket.io')(server);

const port = 4000; // Initialisation du jeu

const board = [["", "", ""], ["", "", ""], ["", "", ""]];
const player = [{
  name: "player1",
  symbol: "O",
  hasWon: false
}, {
  name: "player2",
  symbol: "X",
  hasWon: false
}];
const gameState = false;
app.use(_express.default.static(path.join(__dirname, '..', 'src', 'views')));
app.get('/', (req, res) => {
  res.sendFile('index.html');
});
io.sockets.on('connection', socket => {
  console.log(`Connecté au client ${socket.id}`);
  socket.on('join', client => {
    //TODO Gestion des rooms pour les clients
    console.log('-------------------');
    console.log(`Username : ${client.username}`);
    console.log(`GameID : ${client.room}`);
    console.log('-------------------');
  });
});
server.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});