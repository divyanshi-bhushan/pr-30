class Blue extends Block{
    constructor(x,y,width,height){
        super(x,y,width,height);
    }

    display(){
        fill(51,204,255);
        super.display();
    }

}