const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var bgImg, snow1, snow2, snow3, snow4;

function setup() {
  createCanvas(1000,800);

  engine = Engine.create();
  world = engine.world;

  bgImg = loadImage("snow1.jpg");

  snow1 = new snow(200, 100, 250);
  snow2 = new snow(300, 100, 250);
  snow3 = new snow(400, 100, 250);
  snow4 = new snow(500, 100, 250);

}

function draw() {
  background(bgImg); 
  Engine.update(engine); 
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
}