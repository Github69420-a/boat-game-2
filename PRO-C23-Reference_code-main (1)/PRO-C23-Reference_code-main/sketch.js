const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
var balls = [];
var ball = [];
var testboat;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);
  cannon = new Cannon(180, 110, 130, 100, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y);
  testboat = new Boat(600,300,150,150);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);
  for (var index = 0; index < balls.length; index++) {
    showCannonballs(balls[index]);
  }

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
  cannonBall.display();
  testboat.display();
}

function showCannonballs(balls,i) {
  if (balls) {
    balls.display();
  }
}

function mousePressed() {
  cannonBall = new CannonBall(cannon.x, cannon.y);
  balls.push(cannonBall);
  console.log(balls);
  cannonBall.shoot();
}
