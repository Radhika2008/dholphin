var gameStates;
play=1;
end=0;
var dhlophin;
var gackground;
var seasand;
var seaweed;
var coral,pinkCoral,blueCoral,greenCoral;

function  perload(){

  dhlophin=createSprite(200,300,20,50);
  dhlophin.y=World.mouseY;
  dhlophin.velocityY=4;
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  drawSprite();
  
  
  
  
}