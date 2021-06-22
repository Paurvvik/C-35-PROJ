const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bowing, pin;

var score = 0;




function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  bowling = new Bowling(200,50);
  slingshot = new SlingShot(bowling.body,{x:200, y:50});
  pin = new Pin(810, 350);
}

function draw() {
  background("black");  
  textSize(20)
  fill ("white")
  text ("score: " + score, 500,30)
  

  Engine.update(engine);

  ground.display();
  bowling.display();
  slingshot.display();
  pin.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32)
  bird.trajectory=[];
  Matter.Body.setPosition(bird.body,{x:200,y:50});
  slingshot.attach(bird.body);
}