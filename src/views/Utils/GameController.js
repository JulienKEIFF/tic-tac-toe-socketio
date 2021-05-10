import { X_SIGN, O_SIGN, winboard } from './GameUtils';

export default class GameController {
    gameID = "";

    player1 = "";
    player2 = "";
    player1Socket = "";
    player2Socket = ""

    thisTurnPlayer = "";
    thisWinner = ""

    #board = ["", "", "", "", "", "", "", "", ""];

    constructor(gameID, player1, player1socket, player2, player2socket) {
        this.gameID = gameID;
        this.player1 = player1;
        this.player2 = player2;
        this.player1Socket = player1socket;
        this.player2Socket = player2socket;
        this.thisTurnPlayer = player1;
    }

    setBoard(index) {
        const symbol = this.thisTurnPlayer == this.player1 ? X_SIGN : O_SIGN;
        this.#board[index] = symbol;
    }

    getBoard(){ return this.#board }

    changeThisTurn() {
        this.thisTurnPlayer === this.player1 ? this.thisTurnPlayer = this.player2 : this.thisTurnPlayer = this.player1
    }

    checkWin() {
        const symbol = [X_SIGN, O_SIGN];
        for (const winCondition of winboard) {
            if(
                (symbol[0] == this.#board[winCondition[0]] && symbol[0] == this.#board[winCondition[1]] && symbol[0] == this.#board[winCondition[2]]) ||
                (symbol[1] == this.#board[winCondition[0]] && symbol[1] == this.#board[winCondition[1]] && symbol[1] == this.#board[winCondition[2]])
            ){
                return true
            }
        }
    }

}