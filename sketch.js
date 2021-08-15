function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImg = loadImage("images/iron.png")
}

function setup() {
  createCanvas(800, 600);
  bg = createSprite(400,300,600,600);
  iron = createSprite(380,380)
  bg.addImage(backgroundImg)
  iron.addImage(ironImg)
  iron.scale = 0.3
}

function draw() {
  if (keyDown("up")) {
    iron.y=iron.y-10
  }
  if (keyDown("down")) {
    iron.y=iron.y+10
  }
  if (keyDown("left")) {
    iron.x=iron.x-10
  }
  if (keyDown("right")) {
    iron.x=iron.x+10
  }
  
 
    drawSprites();
   
}