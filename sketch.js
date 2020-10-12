
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 400);

	ground = new Ground(width/2, height-35, width,10);

    recta1 = new Recta(600,height-45,200,20);
	recta1.shapeColor = "white";
	
	recta2 = new Recta(500,height-85,20,100);
	recta2.shapeColor = "white";

    recta3 = new Recta(700,height-85,20,100);
	recta3.shapeColor = "white";

	paperObject = new Paper(100,350,20);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  recta1.display();
  recta2.display();
  recta3.display();
  paperObject.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); 
	 }
   }
   



