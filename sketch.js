

var backgroundImage

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function preload(){
  backgroundImage = loadImage("rain.png");
}



function draw() {
  background(255,255,255);  
  drawSprites();
}