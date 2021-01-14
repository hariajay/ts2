class Block2{
    constructor(x,y,width,height){
        var option = {
            isStatic:false,
            density:5
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.image = loadImage("red.jpg")
        this.trans = 255
        World.add(world,this.body)
    }
    display(){
        
        if(this.body.speed>7){
            World.remove(world,this.body)
            push()
            this.trans=this.trans-10;
            tint(255,this.trans);
            image(this.image,this.body.position.x,this.body.position.y,30,40)
            pop()
        }
        else{
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,30,40)
        pop()
        }
    }
}