class Bird {
  constructor(){
    this.y = height/2
    this.x = 25  
    
    this.gravity = 0.6
    this.lift = -15
    this.velocity = 0
    this.size = 25
  }
  
  show(){
    fill(255)
    ellipse(this.x, this.y, this.size, this.size)
  }
  
  up() {
    this.velocity += this.lift
  }
  
  
  update(){
    this.velocity += this.gravity
    this.y += this.velocity
    
    if(this.y> height){
      this.y = height - this.size/2
      this.velocity = 0

    }
    
//     if(this.y< 0){s
//       this.y = height + this.size/2
//       this.velocity =0 
      
//     }
    
  }
      
}
