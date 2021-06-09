class Player {

    constructor() {
        this.index = null
        this.distance = 0
        this.name = null
    }
    getCount() {
        var playercountRef = database.ref('playerCount');
        playercountRef.on("value", function (data) {
            playerCount = data.val()
        })

    }


    updatecount(count) {

        database.ref('/').update({
            playerCount: count
        })
    }

    
    update() {
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            'name': this.name,
            'distance': this.distance
        })
    }
}