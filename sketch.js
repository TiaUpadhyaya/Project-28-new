
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyImg,m1,m2,m3,m4,m5,m6,mangoImg,stone,stoneImg,tree,treeImg;

function preload()
{
	boyImg=loadImage("sprites/boy.png");
	mangoImg=loadImage("sprites/mango.png");
	stoneImg=loadImage("sprites/stone.png");
	treeImg=loadImage("sprites/tree.png");
}

function setup() {
	var canvas = createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,50,800,20);
	tree = new Tree(650,300,300,400);
    stone = new Stone(100,100);
	m1 = new Mango(650,475);
	m2 = new Mango(600,425);
	m3 = new Mango(700,525);
	m4 = new Mango(650,525);
	m5 = new Mango(600,475);
	m6 = new Mango(700,425);
	boy = new Boy(75,200);
    chain = new Chain(boy.body,stone.body);

	Engine.run(engine);
  
}


function draw() {
  background="white"
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  tree.display();
  boy.display();
  stone.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  chain.display();

  detectollision(stone,m1);
  detectollision(stone,m2);
  detectollision(stone,m3);
  detectollision(stone,m4);
  detectollision(stone,m5);
  detectollision(stone,m6);

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function detectollision(stone,mango){
	mangoBodyPosition=mango.body.position;
	stoneBodyPosition=stone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<-mango.r+stone.r)
	{
		Matter.Body.setStatic(mango.body,false);
	}
}

 function keyPressed(){
	 if(keyCode === 32){
		 Matter.Body.setPosition(stone.body,{x:235, y:420})
		 boy.attach(stone.body);
	 }
 }
