class Hero {
  constructor(x,y,r)
	{
		var options = {
			restitution:0,
			isStatic:false,
			density: 1.2,
			frictionAir: 1
		};
		
		this.width= width;
		this.height = height;
		this.image=loadImage("superhero1.png");
		this.body=Bodies.rectangle(x,y,width,height, options);
		World.add(world, this.body);

	}
	
	display() {    
		var angle = this.body.angle;
		var pos = this.body.position;
		push();
		translate(this.body.position.x, this.body.position.y);
		imageMode(CENTER)
		image(this.image, 0,0,this.width, this.height);
			pop()
			
	}
}
