var box; 
function setup() {
  createCanvas(400,400);
  box = createSprite(30, 84, 67, 83)
  
}

function draw() 
{
  background("green");
  drawSprites(); 
  if (keyIsDown(RIGHT_ARROW)) {
  box.x = box.x + 5
  
  }
  if (keyIsDown(LEFT_ARROW)) {
  box.x = box.x - 5
  }
 
}