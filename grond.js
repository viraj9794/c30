class Ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
			density:1
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(myWorld, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			//translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("cyan");
			rect(groundPos.x,groundPos.y,this.w, this.h);
			pop()
			
	}

}