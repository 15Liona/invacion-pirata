class Cannonball{
   constructor(x, y){
    var balloptions = {
        isStatic: true
    }

    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, balloptions);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
   }

    shot(){
     var newAngle = cannon.angle - 28;
     newAngle = newAngle * (3.14/180);

     var velocity = p5.Vector.fromAngle(newAngle);
     velocity.mult(0.5);

     Matter.Body.setStatic(this.body, false);
     Matter.Body.setVelocity(this.body, {
         x: velocity.x * (180/3.14),
         y: velocity.y * (180/3.14),
     })
    }

   display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
   }
  }