class Form {
    constructor() {
        this.input = createInput("name")

        this.button = createButton("play")
        this.greeting = createElement("h2")
    }
    display() {
var title=createElement('h2')
title.html("Car racing game")
title.position(200,50)
this.input.position(130,260)
this.button.position(200,350)

this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()
player.name=this.input.value()
playerCount=playerCount+1
player.index=playerCount
console.log(player.index)
player.update()
player.updatecount(playerCount)
this.greeting.html("hello"+player.name)
this.greeting.position(130,100)
})
    }
}