class Game {

    constructor() {


    }
    //read the gamestate from the data base
    getstate() {
        var gamestateRef = database.ref('gamestate');
        gamestateRef.on("value", function (data) {
            gameState = data.val()
        })



  }
update(state){

    database.ref('/').update({
        gamestate:state
    })
}

 async start(){
if(gameState===0){
    player=new Player()
    var playercountRef=await database.ref('playerCount').once("value")
    if(playercountRef.exists()){
        form=new Form ()
        form.display()
        
    }
   
}


}

}