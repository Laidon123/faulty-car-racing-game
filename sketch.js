var  database;
var position;
var form,game,player;
var gameState=0
var playerCount

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game=new Game()
  game.getstate()
  game.start()


  
}

function draw(){
  background("white");
  
    
    
    drawSprites();
  
}

function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
