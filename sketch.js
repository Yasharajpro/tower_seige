const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var onSling=1;
var launched=2
var gameState="onSling";
function preload() {
}

function setup(){
    var canvas = createCanvas(1280,570);
    engine = Engine.create();
    world = engine.world;

    base=new Ground(600,400,300,10)
    base2=new Ground(950,250,200,10)
    //level 1
    box=new Box(500,250,30,40,"#87CEEA")
    box1=new Box(530,250,30,40,"#87CEEA")
    box2=new Box(560,250,30,40,"#87CEEA")
    box3=new Box(590,250,30,40,"#87CEEA")
    box4=new Box(620,250,30,40,"#87CEEA")
    box5=new Box(650,250,30,40,"#87CEEA")
    box6=new Box(680,250,30,40,"#87CEEA")
     //level 2
    box7=new Box(530,210,30,40,"pink")
    box8=new Box(560,210,30,40,"pink")
    box9=new Box(590,210,30,40,"pink")
    box10=new Box(620,210,30,40,"pink")
    box11=new Box(650,210,30,40,"pink")
     //level 3
    box12=new Box(560,170,30,40,"#3FE0D0")
    box13=new Box(590,170,30,40,"#3FE0D0")
    box14=new Box(620,170,30,40,"#3FE0D0")
     //top
    box15=new Box(590,130,30,40,"#808080")


    //level 1
    box16=new Box(890,210,30,40,"#87CEEA")
    box17=new Box(920,210,30,40,"#87CEEA")
    box18=new Box(950,210,30,40,"#87CEEA")
    box19=new Box(980,210,30,40,"#87CEEA")
    box20=new Box(1010,210,30,40,"#87CEEA")
    //level 2
    box21=new Box(920,170,30,40,"#3FE0D0")
    box22=new Box(950,170,30,40,"#3FE0D0")
    box23=new Box(980,170,30,40,"#3FE0D0")
    //top
    box24=new Box(950,130,30,40,"pink")
 
    Polygon=new polygon(300,210,50,50)

    sling=new Chain(Polygon.body,{x:300,y:210})

    borderleft=new Ground(0,285,5,570)
    borderright=new Ground(1280,285,5,570)
    borderup=new Ground(640,0,1280,5)
    borderdown=new Ground(640,570,1280,5)
    
}
function draw(){
    Engine.update(engine)
    background("black");
   
    base.display();
    base2.display();
    fill("white");
    textSize(25)
    text("Drag the Hexagonal Stone to Release it, to launch it towards the blocks",285,50)
    box.display();
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
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    Polygon.display();
    sling.display();

  borderdown.display();
  borderleft.display();
  borderright.display();
  borderup.display();

}
function mouseDragged(){
    if(gameState!=="onSling"){
        Matter.Body.setPosition(Polygon.body,{x:mouseX,y:mouseY})
    }
}
function mouseReleased(){
    sling.fly();
    gameState="launched"
}
function keyPressed(){
   if(keyCode==32 && Polygon.body.speed<3){
       sling.attach(Polygon.body)
   }
}