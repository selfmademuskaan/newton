
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball1, ball2,ball3,ball4,ball5;
var wwod;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,300);
	ball1 = new Ball1 (200,500,20);
	ball2 = new Ball1 (220,500,20);
	ball3 = new Ball1 (240,500,20);
	ball4 = new Ball1 (260,500,20);
	ball5 = new Ball1 (280,500,20);
	wood = new Wood(245,370,150,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  wood.display();
  drawSprites();
 
}



