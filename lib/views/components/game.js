"use strict";

Vue.component('game-view', {
  template: `
<div>
    <button type="button" class="btn btn-info" @click="$emit('back', '')">< Retour</button>
    <div id="game" class="text-center">
    <h2>ID de la partie : {{gameid}} </h2>
    <div v-if="gameStarted">
        <table class="table table-bordered mx-auto text-center" style="width: 75%; font-size: 75px">
        <tbody>
        <tr>
            <td id="0" @click="click">&nbsp;</td>
            <td id="1" @click="click">&nbsp;</td>
            <td id="2" @click="click">&nbsp;</td>
        </tr>
        <tr>
            <td id="3" @click="click">&nbsp;</td>
            <td id="4" @click="click">&nbsp;</td>
            <td id="5" @click="click">&nbsp;</td>
        </tr>
        <tr>
            <td id="6" @click="click">&nbsp;</td>
            <td id="7" @click="click">&nbsp;</td>
            <td id="8" @click="click">&nbsp;</td>
        </tr>
        </tbody>
    </table>
    </div>
    
    <h3 v-if="waitForOponnent">En attente d'un adversaire ...</h3>
    <h3 v-if="waitForPlay">Tour de l'adversaire</h3>
    <button v-if="replayButton" class="btn btn-primary">Rejouer</button>
    </div>
</div>
    `,
  props: ['playername', 'gameid'],

  data() {
    return {
      canClick: false,
      gameStarted: false,
      waitForOponnent: true,
      waitForPlay: false,
      replayButton: false,
      board: []
    };
  },

  methods: {
    click: function (ev) {
      if (this.canClick) {
        const el = document.getElementById(ev.target.id);

        if (el.innerHTML !== "X" && el.innerHTML !== "O") {
          this.$emit("click-case", ev.target.id);
          this.canClick = false;
        }
      }
    },
    start: function (first) {
      first ? this.canClick = true : this.waitForPlay = true;
      this.gameStarted = true;
      this.waitForOponnent = false;
    },
    win: function (ev) {
      alert('il y a un gagnant');
      this.canClick = false;
      this.replayButton = true;
    },
    updateBoard: function (board) {
      for (let i = 0; i < board.length; i++) {
        const element = document.getElementById(i);
        const symbol = board[i];
        if (symbol !== "") element.innerHTML = symbol;
      }

      if (this.waitForPlay) {
        this.canClick = true;
        this.waitForPlay = false;
      } else {
        this.waitForPlay = true;
      }
    }
  }
});