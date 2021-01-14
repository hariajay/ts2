class Ground {
    constructor(x,y,width,height){
      var option = {
          isStatic:true,
          density:15000
      }
      this.Body = Bodies.rectangle(x,y,width,height,option)
      this.width = width 
      this.height = height
      World.add(world,this.Body)
  }
  display(){
      var pos = this.Body.position
      push()
      rectMode(CENTER)
      fill("brown")
      rect(pos.x,pos.y,this.width,this.height)
      pop()
  }
}