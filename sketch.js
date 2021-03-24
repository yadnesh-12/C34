const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function preload() {
    
}

function setup(){
    
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    ground1= new Ground(600,750,1200,30);
    box1 = new Box(900,400,70,70);
    box2 = new Box(900,400,70,70);
    box3 = new Box(900,400,70,70);
    box4 = new Box(900,400,70,70);
    box5 = new Box(900,400,70,70);
    box6 = new Box(900,400,70,70);
    box7 = new Box(900,400,70,70);
    box8 = new Box(900,400,70,70);

    box9 = new Box(1000,400,70,70);
    box10 = new Box(1000,400,70,70);
    box11 = new Box(1000,400,70,70);
    box12 = new Box(1000,400,70,70);
    box13 = new Box(1000,400,70,70);
    box14 = new Box(1000,400,70,70);
    box15 = new Box(1000,400,70,70);
    box16 = new Box(1000,400,70,70);
    box25 = new Box(1000,100,70,70);

    box17 = new Box(1100,400,70,70);
    box18 = new Box(1100,400,70,70);
    box19 = new Box(1100,400,70,70);
    box20 = new Box(1100,400,70,70);
    box21 = new Box(1100,400,70,70);
    box22 = new Box(1100,400,70,70);
    box23 = new Box(1100,400,70,70);
    box24 = new Box(1100,400,70,70);

    ball1= new Ball(600,500,100);

    rope= new Rope(ball1.body,{x:600,y:150})
   
}

function draw(){
    Engine.update(engine);
    background("yellow");

    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box25.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();

    rope.display();

    ball1.display();

    
    
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}