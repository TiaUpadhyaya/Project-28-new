class Mango{
    constructor(x, y, radius, angle) {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1.0,
            
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.radius = radius;
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
}