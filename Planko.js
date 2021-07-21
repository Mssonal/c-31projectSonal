class Planko {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill("white");
      ellipseMode(RADIUS)
      ellipse(pos.x,pos.y,this.r);
    }
  };
