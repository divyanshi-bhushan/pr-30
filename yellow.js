class Yellow extends Block{
    constructor(x,y,width,height){
        super(x,y,width,height);
    }

    display(){
        fill(255,255,204);
        super.display();
    }
}