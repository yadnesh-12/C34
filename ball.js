class Ball {
   
    constructor(x,y,radius){
        var option = {
            density:2
        }
        this.body=Bodies.circle(x,y,radius,option);
        World.add(world,this.body);
        this.radius=radius;
    }
    display(){
        var pos = this.body.position
        fill("gray");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}