class Box{
  constructor(x, y, width, height,color) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.color=color
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.color)
      rect(0, 0, this.width, this.height);
      pop();
    }
}