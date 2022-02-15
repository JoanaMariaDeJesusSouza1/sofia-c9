var box;



function setup() {
  createCanvas(600,600);
  box=createSprite(300,300,20,20);
  box.shapeColor="purple";
}

function draw() {
  background(30);

 if(keyDown("up")){
   box.y = box.y -5;
 }else if (keyDown("down")){
   box.y = box.y +5;
 }
if(keyDown("right")){
  background("blue");
}else if(keyDown("left")){
  background("green");
}else{
  background("pink");
}


drawSprites();
} 