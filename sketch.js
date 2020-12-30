var helicopterIMG, helicopterSprite, packageSprite,packageIMG,NYCIMG,NYCSprite;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gamestate = "help";
var blahstate = " ";
function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	NYCIMG=loadImage("NYC.jpg");
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	NYCSprite = createSprite(600,300,0,0);
	NYCSprite.addImage(NYCIMG);
	NYCSprite.scale = 0.3;
	packageSprite=createSprite(width/2, 100, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1;

	helicopterSprite=createSprite(-100, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    helicopterSprite.velocityX = 2;
  
}


function draw() {
  rectMode(CENTER);
  background(191,239,255);
  
 if(gamestate ==="help"){
	packageSprite.x= helicopterSprite.x;
 
  keyPressed();
 }
 if(gamestate ==="thanks"){
	packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
 }
  drawSprites();
  if(packageSprite.y > 500){
	blahstate = "inaccessible"

	  if(packageSprite.x < 150){
       blahstate = "accessible";
	  }
	  
		if(packageSprite.x > 950){
			blahstate = "accessible";

		}  
	
	
  }
  if(blahstate==="accessible"){
	  textSize(50);
	  fill(255,255,255);
	  text("Package accessible... Mission Success!",200,350)
  }
  if(blahstate==="inaccessible"){
	textSize(50);
	fill(255,255,255);
	text("Package inaccessible... Mission Failed!",200,350)
}
console.log(blahstate);
}

function keyPressed() {
 if (keyDown("DOWN_ARROW")) {
	gamestate = "thanks";
	packageBody = Bodies.circle(helicopterSprite.x , 100 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);
	Engine.run(engine);

    
  }
}



