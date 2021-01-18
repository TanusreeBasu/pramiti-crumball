class Bin {
    constructor(x,y,width,height) {
      var options ={
        isStatic:true,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.rectangle(x,y,width,height, options);
      this.width = width;
      this.height = height;
     // this.body.position.x = x;
     // this.body.position.y = y; 
      
      World.add(world, this.body);
    }
    display (){
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}