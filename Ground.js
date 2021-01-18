class Ground {
    constructor() {
      var options ={
        isStatic:true
      }
      this.body = Bodies.rectangle(400,650,800,50,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display (){
        rectMode(CENTER);
        fill("brown");
        rect (400,650,800,50);
    }
}