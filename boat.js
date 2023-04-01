class Boat {
   constructor(x, y, w, h, boatpos){
     var boat_options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1
     };

     this.body = Bodies.rectangle(x, y, w, h, boat_options);
     this.width = w;
     this.height = h;
     this.image = loadImage("./assets/boat.png");
     this.boatPosition = boatpos;
     World.add(world, this.body);
   }


   display(){
     var pos = this.body.position
     var angle = this.body.angle

     push();
     translate(pos.x, pos.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image, 0, this.boatPosition, this.width, this.height);
     pop();
   }
}