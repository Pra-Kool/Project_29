class Base{
    constructor(x, y, w, h){

        let options = {
            isStatic:true
           };
       
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = width
        this.height = height
    }

    display(){
    
        push ();
        translate (this.x, this.y);
        rect (100,200, this.width, this,height)
       // rect (500, 100, this.width, this.height)
        pop ();
        Fill("white")
    }
}