const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var wall1;
var wall2;
 var ground

var stones=[]



function setup() {

  
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  wall1 = new Base(100, 200, 70, 40);
  World.add(world, wall1)
  wall2 = new Base(300, 200, 70, 40);
  World.add(world, wall2)
  ground = new Base(200, 10, 500, 10)

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);



}

function draw() {
  background(51);
  Engine.update(engine);

  for(var i = 0; i <= 8; i++){
    var x = random(width/2 - 200, width/2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone)
  }

}
