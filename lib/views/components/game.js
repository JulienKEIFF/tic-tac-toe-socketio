"use strict";

Vue.component('game-view', {
  template: `
<div>
    <button type="button" class="btn btn-info" @click="$emit('back', '')">< Retour</button>
    <div id="game" class="text-center">
    <h1>Tour du joueur N</h1>
    <table class="table table-bordered mx-auto text-center" style="width: 75%; font-size: 75px">
        <tbody>
        <tr>
            <td>O</td>
            <td>X</td>
            <td>O</td>
        </tr>
        <tr>
            <td>O</td>
            <td>X</td>
            <td>O</td>
        </tr>
        <tr>
            <td>O</td>
            <td>X</td>
            <td>O</td>
        </tr>
        </tbody>
        </table>
    </div>
    </div>
    `
});