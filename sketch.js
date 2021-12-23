
var ground
var groundV2
var groundV3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ground_options = {
		isStatic:true
	  }
	  ground = Bodies.rectangle(400, 670, 800, 20, ground_options)
	  World.add(world, ground)


	  var ground_options = {
		isStatic:true
	  }
	  groundV2 = Bodies.rectangle(600, 650, 20, 50, ground_options)
	  World.add(world, ground)


	  var ground_options = {
		isStatic:true
	  }
	  groundV3 = Bodies.rectangle(680, 650, 20, 50, ground_options)
	  World.add(world, ground)


	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 800, 20)
  rect(groundV2.position.x, groundV2.position.y,20, 50 )
  rect(groundV3.position.x, groundV3.position.y,20, 50 )


  drawSprites();
 
}



