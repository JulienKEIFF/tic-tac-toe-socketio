Vue.component('home-view', {
    template: `
<div>
    <div class="container">
        <h1>Comment jouer ?</h1>
        <p>Le but du jeu est d’aligner avant son adversaire 3 symboles identiques
            horizontalement, verticalement ou en diagonale.
            Chaque joueur a donc son propre symbole, une croix pour l’un et un
            rond pour l’autre. La partie se termine quand l’un des joueurs à aligner 3 symboles ou
            quand la grille est complétée sans vainqueur. Il y a alors égalité.</p>
        <h1>Comment gagner une partie ?</h1>
        <p>Le premier joueur a aligner 3 symboles identiques gagne la partie. Attention, le joueur
            qui débute est toujours avantagé pour gagner. Pensez donc à alterner !</p>
    </div>
    <div class="container">
        <div id="form">
            <div class="mb-2">
                <label for="player" class="form-label">Entrez votre pseudo :</label>
                <input type="text" class="form-control" id="player" v-model="username">
            </div>
            <div class="mb-3">
                <label for="game-id" class="form-label">ID de partie à rejoindre :</label>
                <input type="text" class="form-control" id="game-id" v-model="gameID">
            </div>
            <button type="submit" class="btn btn-primary" id="form-button-create" @click="$emit('join', {username: username, gameID: gameID}); $emit('create', '')">Créer une partie</button>
            <button type="submit" class="btn btn-secondary" id="form-button-join"  @click="$emit('join', {username: username, gameID: gameID})">Rejoindre une partie</button>
        </div>
    </div>
</div>`,
    data(){
        return{
            username: null,
            gameID: null
        }
    },
    methods:{

    }
})