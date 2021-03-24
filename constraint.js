class Rope{
    constructor(body,pointB){
        var option = {
            bodyA: body,
            pointB: pointB,
            stiffness:1.2,
            length:350
        }
        this.rope=Constraint.create(option);
        World.add(world,this.rope);
        this.pointB=pointB
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}