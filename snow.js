class snow {
    constructor(x,y,r)
      {
          var options = { 
              density: 1, 
              friction: 1
          };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("snow4.webp");
          this.image.scale=0.05;
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
          World.add(world, this.body);
  
      }
      
      display()
      {
              
              var heroPos=this.body.position;		
              push()
              translate(heroPos.x, heroPos.y-100);
              rectMode(CENTER)
              fill(255,0,255)
              imageMode(CENTER);
              image(this.image, 0,0,(this.r)/4, (this.r)/4)
              pop()
              
      }
  }
  