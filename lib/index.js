"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const path = require('path');

const app = (0, _express.default)();

const io = require("socket.io")(4001);

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
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'views/index.html'));
});
app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'views/game.html'));
});
io.on("connection", socket => {
  console.log('iic');
  socket.on('game-join', client => {
    console.log(client);
  });
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});