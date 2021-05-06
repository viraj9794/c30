const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Body
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var myEngine, myWorld

var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;
var ball, ground, chain;

function setup(){
    createCanvas(1600,800)
    myEngine=Engine.create();
    myWorld=myEngine.world;
    ground=new Ground(800, 790, 1600, 20);

    b1=new Block(900, 700, 75, 100, "blue");
    b2=new Block(975, 700, 75, 100, "blue");
    b3=new Block(1050, 700, 75, 100, "blue");
    b4=new Block(1125, 700, 75, 100, "blue");
    b5=new Block(1200, 700, 75, 100, "blue");
    b6=new Block(1275, 700, 75, 100, "blue");
    b7=new Block(1350, 700, 75, 100, "blue");
    b8=new Block(975, 600, 75, 100, "green");
    b9=new Block(1050, 600, 75, 100, "green");
    b10=new Block(1125, 600, 75, 100, "green");
    b11=new Block(1200, 600, 75, 100, "green");
    b12=new Block(1275, 600, 75, 100, "green");
    b13=new Block(1050, 500, 75, 100, "red");
    b14=new Block(1125, 500, 75, 100, "red");
    b15=new Block(1200, 500, 75, 100, "red");
    b16=new Block(1125, 400, 75, 100, "orange");

    ball=new Ball(300, 500, 50);

    chain= new Slingshot(ball.body,{x:300, y:400})
}

function draw(){
    background(0)
    Engine.update(myEngine);
    show();
}
function show(){
    ground.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();

    ball.display();

    chain.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
  
  function mouseReleased(){
    chain.fly();
  }
  
  function keyPressed(){
    if(keyCode===32){
    chain.attach(ball.body);
    }
  }
  