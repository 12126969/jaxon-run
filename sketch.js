var path,bomb,coin,energyDrink,power,jaxon


function preload(){
  //pre-load images
jaxon_running=loadAnimation("Runner-1.png","Runner-2.png")
bomb1 = loadImage("bomb.png");
    coin1 = loadImage("coin.png");
    energyDrink1 = loadImage("energyDrink.png");
    power1 = loadImage("power.png");
path1=loadImage("path.png")
  }

function setup(){
  createCanvas(400,400);
  
  path=createSprite(200,200)
  path.addImage(path1)

  jaxon = createSprite(200, 300, 20, 20);
  jaxon.addAnimation("running", jaxon_running);
  jaxon.scale = 0.07;
   
  bomb = createSprite(200, 100, 20, 20);
  bomb.addImage(bomb1);
  bomb.scale = 0.12;

  coin = createSprite(200, 180, 20, 20);
  coin.addImage(coin1);
  coin.scale = 0.3;

  energyDrink = createSprite(250, 200, 20, 20);
  energyDrink.addImage(energyDrink1);
  energyDrink.scale = 0.15;


leftBoundary=createSprite(0,0,100,800); 
leftBoundary.visible = false; 

//create right Boundary 
rightBoundary=createSprite(410,0,100,800); 
rightBoundary.visible = false;
}

function draw() {
  background(0);

  jaxon.x=World.mouseX;
  
  path.velocityY=4
path.scale=1.2


  if (path.y>400){
    path.y=height/2;
  }

  drawSprites();
  edges= createEdgeSprites();
   jaxon.collide(edges[3]); 
   jaxon.collide(leftBoundary); 
   jaxon.collide(rightBoundary);
}
