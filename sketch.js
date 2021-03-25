const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var box1 ;

function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(750,height,1500,20)

    box1 =new Box (900,100)
    box2 =new Box (900,100)
    box3 =new Box (900,100)
    box4 =new Box (900,100)
    box5 =new Box (900,100)

    box6 =new Box (1000,100)
    box7 =new Box (1000,100)
    box8 =new Box (1000,100)
    box9 =new Box (1000,100)
    box10 =new Box (1000,100)

    box11 =new Box (1100,100)
    box12 =new Box (1100,100)
    box13=new Box (1100,100)
    box14=new Box (1100,100)
    box15 =new Box (1100,100)

    ball1=new Ball (700,200)
    rope1=new Rope (ball1.body,{x:700,y:50})

}

function draw(){
    background(0);
    Engine.update(engine);
   
   
    ground.display();
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

    ball1.display();
    rope1.display();

    
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}