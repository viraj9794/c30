class Slingshot{
    constructor(bodyA, pinB){
        var options = {
            bodyA: bodyA,
            pointB: pinB,
            stiffness: 0.05,
            length: 100
        }
        this.sling = Constraint.create(options);
        World.add(myWorld, this.sling);
        this.pointB=pinB;
    }
    display(){
       if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
       }
    }
    fly(){
    this.sling.bodyA=null
    }
    attach(body){
        this.sling.bodyA=body;
    }
}