class Stand{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            friction:1.0
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.stand=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.stand);
    }

    display(){

        var angle=this.stand.angle;
        strokeWeight(2);
        fill(255,51,51);
        push();
        translate(this.stand.position.x,this.stand.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}