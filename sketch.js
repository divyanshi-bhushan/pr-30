const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var stand1,stand2;
var polygon;
var slingshot;
var ground;
var engine,world;

function setup() {
createCanvas(1000,400)
engine = Engine.create();
world = engine.world;


    Engine.run(engine);

    
    ground=new Ground(500,380,1000,20);
    stand1=new Stand(380,300,270,15);
    stand2=new Stand(700,200,200,15);


 
    block1=new Blue(280,275,30,40);
    block2=new Blue(310,275,30,40);
    block3=new Blue(340,275,30,40);
    block4=new Blue(370,275,30,40);
    block5=new Blue(400,275,30,40);
    block6=new Blue(430,275,30,40);
    block7=new Blue(460,275,30,40);
    block8=new Blue(490,275,30,40);

    block9=new Yellow(310,235,30,40);
    block11=new Yellow(340,235,30,40);
    block10=new Yellow(370,235,30,40);
    block12=new Yellow(400,235,30,40);
    block13=new Yellow(430,235,30,40);
    block14=new Yellow(460,235,30,40);

    block15=new Pink(340,195,30,40);
    block16=new Pink(370,195,30,40);
    block17=new Pink(400,195,30,40);
    block18=new Pink(430,195,30,40);

    block19=new Green(369,155,30,40);
    block20=new Green(400,155,30,40);

   




     
    blocks1=new Blue(640,175,30,40);
    blocks2=new Blue(670,175,30,40);
    blocks3=new Blue(700,175,30,40);
    blocks4=new Blue(730,175,30,40);
    blocks5=new Blue(760,175,30,40);

    blocks6=new Pink(670,135,30,40);
    blocks7=new Pink(700,135,30,40);
    blocks8=new Pink(730,135,30,40);

    blocks9=new Green(700,95,30,40);

    polygon=new Hexa(103,217,40);

    slingshot=new Slingshot(polygon.polygon,{x:104,y:190});

}
 function draw(){
     background(51,0,0);
     Engine.update(engine);

     strokeWeight(2);
     stroke(15);

     stand1.display();
     stand2.display();

     stroke(15);
     //fill("green");
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
     

     stroke(15);

     blocks1.display();
     blocks2.display();
     blocks3.display();
     blocks4.display();
     blocks5.display();

     stroke(15);
     
     blocks6.display();
     blocks7.display();
     blocks8.display();

     stroke(15);
     blocks9.display();


textSize(20);
fill("grey");
text("Drag the Hexagonal stone and Release, to launch it towards the blocks",35,33); 
textSize(10);
text("Press SPACE to get second chance to hit the blocks",743,320);

//text(mouseX+","+mouseY,mouseX,mouseY); 
polygon.display(); 
     
 slingshot.display();
    ground.display();
 }

 function mouseDragged(){
    Matter.Body.setPosition(polygon.polygon,{x:mouseX,y:mouseY});

 }

 function mouseReleased(){
     slingshot.fly();
 }

 function keyPressed(){
     if(keyCode === 32){
         slingshot.attach(polygon.polygon);
     }
 }