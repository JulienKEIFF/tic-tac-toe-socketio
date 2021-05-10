"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GameUtils = require("./GameUtils");

class GameController {
  isReady = false;
  gameID = "";
  player1 = "";
  player2 = "";
  player1Socket = "";
  player2Socket = "";
  thisTurnPlayer = "";
  #board = ["", "", "", "", "", "", "", "", ""];

  constructor(gameID, player1, player1socket, player2, player2socket) {
    this.gameID = gameID;
    this.player1 = player1;
    this.player2 = player2;
    this.player1Socket = player1socket;
    this.player2Socket = player2socket;
    this.thisTurnPlayer = player1;
    this.isReady = true;
  }

  setBoard(index) {
    const symbol = this.thisTurnPlayer == this.player1 ? _GameUtils.X_SIGN : _GameUtils.O_SIGN;
    this.#board[index] = symbol;
  }

  getBoard() {
    return this.#board;
  }

  changeThisTurn() {
    this.thisTurnPlayer === this.player1 ? this.thisTurnPlayer = this.player2 : this.thisTurnPlayer = this.player1;
  }

  checkWin() {
    const symbol = [_GameUtils.X_SIGN, _GameUtils.O_SIGN];

    for (const winCondition of _GameUtils.winboard) {
      if (symbol[0] == this.#board[winCondition[0]] && symbol[0] == this.#board[winCondition[1]] && symbol[0] == this.#board[winCondition[2]] || symbol[1] == this.#board[winCondition[0]] && symbol[1] == this.#board[winCondition[1]] && symbol[1] == this.#board[winCondition[2]]) {
        return true;
      }
    }
  }

}

exports.default = GameController;