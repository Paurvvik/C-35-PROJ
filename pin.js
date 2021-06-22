class Pin  {
    constructor(x, y){
      this.image = loadImage("pin.png");
   this.gameState="pinpresent"
    }
  display()
  {
   
  if((this.body.speed)<2.5)
  {super.display();
  }else
  {
    if(this.gameState === "pinpresent"){
  World.remove(world,this.body)  
  score+=50
  this.gameState="pinabsent"
    }
  }
  }
  };
  