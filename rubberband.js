class Sling {
    constructor(bodyA,pointB){
        var option = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.4,
            length:15
        }
        this.pointB = pointB
        this.Sling = Constraint.create(option)
        World.add(world,this.Sling)
   }
    fly(){
        this.Sling.bodyA = null
    }
    attach(body){
        this.Sling.bodyA = body
    }
    display(){
        if(this.Sling.bodyA){
        var bodyA = this.Sling.bodyA.position
        var pointB = this.pointB
        push()
        strokeWeight(3)
        stroke("black")
        line(bodyA.x,bodyA.y,pointB.x,pointB.y)
        pop()
       }
    }
}