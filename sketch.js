const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var paper1;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1 = new Box(300, 600, 20, 100);
	box2 = new Box(500, 600, 20, 100);
	box3 = new Box(400, 650, 200, 20);

	paper1 = new Paper(200, 100, 20);

	ground1 = new Ground(400, 680, 800, 20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  paper1.display();
  ground1.display();
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.positions, {x:20,y:-10});
	}
}

