"use strict";

var _express = _interopRequireDefault(require("express"));

var _GameController = _interopRequireDefault(require("./views/Utils/GameController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const path = require('path');

const app = (0, _express.default)();

const server = require('http').createServer(app);

const io = require('socket.io')(server);

const port = 4000; // Initialisation du jeu

let gameList = [];
const gameState = false;
app.use(_express.default.static(path.join(__dirname, '..', 'src', 'views')));
app.get('/', (req, res) => {
  res.sendFile('index.html');
});
io.sockets.on('connection', socket => {
  socket.on('join', client => {
    //TODO Gestion des rooms pour les client
    let canInitGame = true;
    gameList.map(gc => {
      if (gc.gameID == client.room) {
        canInitGame = false;
        gc.player2 = client.username;
        gc.player2Socket = socket.id;
        launchGame(gc.player1Socket, true);
        launchGame(gc.player2Socket, false);
        socket.emit('get-player-name', gc.thisTurnPlayer);
      }
    });

    if (canInitGame) {
      const gameController = new _GameController.default(client.room, client.username, socket.id, "", "");
      gameList.push(gameController);
      socket.emit('get-player-name', gameController.thisTurnPlayer);
    }
  });
  socket.on('check-room-info', client => {
    socket.join(client); //TODO Check id

    socket.emit('check-room-info', true);
  });
  socket.on('played', playState => {
    gameList.map(gc => {
      if (gc.gameID == playState.room) {
        gc.setBoard(playState.playedCase);
        const board = gc.getBoard();
        gc.changeThisTurn();
        returnBoard(gc.player1Socket, board);
        returnBoard(gc.player2Socket, board);

        if (gc.checkWin()) {
          socket.emit('win');
        }
      }
    });
  });
});
server.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

function launchGame(socket, first) {
  io.to(socket).emit('play', first);
}

function returnBoard(socket, board) {
  io.to(socket).emit('board', board);
}