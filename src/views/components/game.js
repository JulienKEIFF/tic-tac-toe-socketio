Vue.component('game-view', {
    template: `
<div>
    <button type="button" class="btn btn-info" @click="$emit('back', '')">< Retour</button>
    <div id="game" class="text-center">
    <h2>ID de la partie : {{gameid}} </h2>
    <h1>Tour du joueur {{playername}}</h1>
    <table class="table table-bordered mx-auto text-center" style="width: 75%; font-size: 75px">
        <tbody>
        <tr>
            <td id="0" @click="click">O</td>
            <td id="1" @click="click">X</td>
            <td id="2" @click="click">O</td>
        </tr>
        <tr>
            <td id="3" @click="click">O</td>
            <td id="4" @click="click">X</td>
            <td id="5" @click="click">O</td>
        </tr>
        <tr>
            <td id="6" @click="click">O</td>
            <td id="7" @click="click">X</td>
            <td id="8" @click="click">O</td>
        </tr>
        </tbody>
        </table>
    </div>
    </div>
    `,
    props: ['playername', 'gameid'],
    data() {
        return {
            canClick: false
        }
    },
    methods: {
        click: function (ev) {
            if (this.canClick) {
                this.$emit("click-case", ev.target.id)
                this.canClick = false
            }
        }
    }
})