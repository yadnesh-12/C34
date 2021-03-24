class Box {
    constructor(x,y,width,height){
        var option = {
            restitution:0.8,
            friction:1,
            density:0.04
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        this.width=width;
        this.height= height;
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        fill("red");
        strokeWeight(4)
        stroke("black");

        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}