
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2


}


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Bbody=createSprite(580, 655, 90, 10);
	Bbody.shapeColor=("white")
	
	Bbody2=createSprite(540, 625, 10, 70);
	Bbody2.shapeColor=("white")

	Bbody3=createSprite(630, 625, 10, 70);
	Bbody3.shapeColor=("white")

	Ground=createSprite(580, 690, 5000, 10);
	Ground.shapeColor=("red")
	 
	
	Ball=createSprite(150, 680, 10, 10);
	Ball.shapeColor=("purple")

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  









  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Ball.velocityY = -10;
		Ball.x = ghost.x + 3;
	 }
	}
