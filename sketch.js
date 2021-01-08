const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var stand1,stand2;
var polygon;

function preload(){
    polygonImage = loadImage("polygon.png");
}
function setup(){
    engine =Engine.create();
    world = engine.world;

    createCanvas(1200,400);

    stand1 = new Ground(600,380,300,10);
    stand2 = new Ground(1000,200,300,10);

    block1 = new Box(480,200,"lightblue");
    block2 = new Box(520,200,"lightblue");
    block3 = new Box(560,200,"lightblue");
    block4 = new Box(600,200,"lightblue");
    block5 = new Box(640,200,"lightblue");
    block6 = new Box(680,200,"lightblue");
    block7 = new Box(720,200,"lightblue");

    block8 = new Box(520,100,"pink");
    block9 = new Box(560,100,"pink");
    block10 = new Box(600,100,"pink");
    block11 = new Box(640,100,"pink");
    block12 = new Box(680,100,"pink");

    block13 = new Box(560,50,"orange");
    block14 = new Box(600,50,"orange");
    block15 = new Box(640,50,"orange");

    block16 = new Box(600,10,"lightgreen");

    block17 = new Box(920,100,"lightblue");
    block18 = new Box(960,100,"lightblue");
    block19 = new Box(1000,100,"lightblue");
    block20 = new Box(1040,100,"lightblue");
    block21 = new Box(1080,100,"lightblue");
    

    block22 = new Box(960,50,"pink");
    block23 = new Box(1000,50,"pink");
    block24 = new Box(1040,50,"pink");
    

    block25 = new Box(1000,10,"orange");

    var options = {
        density : 2
    }
    polygon = Bodies.circle(100,200,30,options);
    World.add(world,polygon);

    sling = new SlingShot(polygon,{x:100,y:200});
    
}

function draw(){
    Engine.update(engine);
    background(0);

    stand1.display();
    stand2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();  
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();  
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,60,60);

    sling.display();

    fill("white");
    text("Grag the Hexagonal Stone and Release it, to launch it towards the blocks",50,20);
    text("To replay press Space key", 50,40);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode == 32){
        sling.attach(polygon);
    }
}
