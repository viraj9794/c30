class Block
{
	constructor(x,y,w,h,colour)
	{
		var options={
			isStatic:false,
			density:0.7		
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h, options);
 		World.add(myWorld, this.body);
		this.Visibility=255;
		this.colour=(colour)
	}
	display(){
			//console.log(this.body.speed);
			if(this.body.speed < 5){
				var groundPos=this.body.position;		
				push()
				translate(groundPos.x, groundPos.y);
				rotate(this.body.angle);
				rectMode(CENTER)
				//strokeWeight(4);
				fill(this.colour)
				rect(0,0,this.w, this.h);
				pop()
			}
			else{
				World.remove(myWorld, this.body);
				var groundPos=this.body.position;
				push();
			    translate(groundPos.x, groundPos.y);
				rotate(this.body.angle);
				this.Visibility=this.Visibility-5;
				fill(this.colour);
				tint(255, this.Visibility);
				rect(0,0, this.w, this.h);
			pop();
			  }
	}

}