
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,box4;
var heli, heliIMG;
var ground;

var sceneIMG;

function preload(){
  sceneIMG = loadImage('scene.jpg');
  heliIMG = loadImage('heli.png');
}

function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;

  ground = new Box(600,625,1200,20);
}


function draw() 
{
  background(sceneIMG);
  Engine.update(engine);

  heli = createSprite(500,200,50,50)
  
  ground.show();
}

