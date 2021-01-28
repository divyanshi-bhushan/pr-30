class Green extends Block{
    constructor(x,y,width,height){
        super(x,y,width,height);
    }

    display(){
        fill(102,255,102);
        super.display();
    }
}