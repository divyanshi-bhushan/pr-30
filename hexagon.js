class Hexa{
    constructor(x,y,r){
 var options={
  isStatic:false,
  restitution:0,
  friction:1,
  density:1.2
  } 
  this.x=x;
  this.y=y;
  this.r=r;
  this.image=loadImage("polygon.png");
  this.polygon=Bodies.circle(this.x,this.y,this.r/2,options);
  World.add(world,this.polygon);
 }
 display(){
 push();
 translate(this.polygon.position.x,this.polygon.position.y);
 imageMode(CENTER);
 image(this.image,0,0,this.r,this.r);
 pop();
 }
}