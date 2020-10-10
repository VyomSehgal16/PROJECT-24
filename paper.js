class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution: 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.circle(x,y,radius,options,maxSides);
        this.radius = radius;
        this.maxSides = maxSides;
        World.add(world, this.body);
    }
    display(){
      fill("red");  
    }
}