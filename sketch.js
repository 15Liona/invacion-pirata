const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var groungimg;
var tower;
var towerimg;
var bgimg;
var balls = [];
var boat;
var boats = [];


function preload() {
  //groundimg = loadImage("./assets/background.gif");
  towerimg = loadImage("./assets/tower.png");
  bgimg = loadImage("./assets/background.gif");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

  var groundoptions = {
  isStatic: true
  }

  

  ground = Bodies.rectangle(0, height -1, width *2, 1, groundoptions);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, groundoptions);
  World.add(world, tower);

  cannon = new Cannon(180, 110, 180, 150, angle);
  //cannonball = new Cannonball(cannon.x, cannon.y);


 
}

function draw() {
  background(189);
  image(bgimg, 0, 0, width, height);
  Engine.update(engine);
  push();
  imageMode(CENTER);
  image(towerimg, tower.position.x, tower.position.y, 160, 310);
  pop();
  rect(ground.position.x, ground.position.y, width *2, 1);
  //rect(tower.position.x, tower.position.y, 160, 310);
  


  showboats();

  for(var i=0; i < balls.length; i++){
    showballs(balls[i]);
  }
  cannon.display();
}


function keyPressed(){
  if(keyCode === DOWN_ARROW){
   var cannonball = new Cannonball(cannon.x, cannon.y);
   Matter.Body.setAngle(cannonball.body, cannon.angle);
   balls.push(cannonball);
  }
}


function showballs(ball, index){
  if(ball){
    ball.display();
  }
}

function showboats(){
  if(boats.length > 0){
    if(
      boats[boats.length -1] === undefined || 
      boats[boats.length -1].body.position.x < width - 300
    ) {
      var positions = [-40, -60, -70, -20];
      var position = random(positions);
      boat = new Boat (width, height -100, 170, 170, position);
      boats.push(boat);
    }

    for(var i=0; i < boats.length; i++){

      if(boats[1]){
        Matter.Body.setVelocity(boats[i].Body, {
          x: -0.9,
          y: 0
        });
      boats[i].display();
      }
     }
    }
     else{
      boat = new Boat(width -79, height - 60, 170, 170, -80);
      boats.push(boat);
     }
   
  
}



function keyReleased(){
  if(keyCode === DOWN_ARROW){
    balls[balls.length - 1].shot();
  }
}