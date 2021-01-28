class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.ground=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.ground);
    }
    display(){
       // strokeWeight(2);
        fill(255,51,51);
        translate(this.ground.position.x,this.ground.position.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    }
}