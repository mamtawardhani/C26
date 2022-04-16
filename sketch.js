
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var top_wall;


var btn1;
var btn2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  ground = new Ground(200,390,400,20);

  var ball_options = {
    restitution:0.8
  }



}


function draw() 
{
  background(51);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  Engine.update(engine);
  
 
  ground.show();
  
 
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  


