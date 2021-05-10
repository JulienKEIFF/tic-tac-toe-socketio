"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//import {  } from './GameUtils';
class GameController {
  isReady = false;
  gameID = "";
  player1 = "";
  player2 = "";
  #board = [["", "", ""], ["", "", ""], ["", "", ""]];
  thisTurnPlayer = "";

  constructor(gameID, player1, player2) {
    this.gameID = gameID;
    this.player1 = player1;
    this.player2 = player2;
    this.thisTurnPlayer = player1;
    this.start();
    this.isReady = true;
  }

  start() {
    console.log("C'est parti, let's go !!");
  }

  thisTurn() {
    this.thisTurnPlayer === this.player1 ? this.thisTurnPlayer = this.player2 : this.thisTurnPlayer = this.player1;
  }

}

exports.default = GameController;