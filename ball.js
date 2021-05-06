class Ball{
    constructor(x,y,r){
        var options={
            density:0.4,
            friction:0.8
        }
        this.body=Bodies.circle(x,y,r,options);
        World.add(myWorld, this.body);
        this.image=loadImage("polygon.png");
    }

    display(){
        fill("red");
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 125, 125)
    
    }



}