class Pangolin {
  constructor(){
    this.x= 70
    this.y= height/2
    this.size= 36
    this.touchingGround = true
    
    this.velocity = 0
    this.gravity = 0.6
    this.lift = -18
  
  }
  
  show(){
    fill(255)
    ellipse(this.x, this.y, this.size, this.size)
  }
  
  up(){
    if(this.touchingGround){
      
      this.velocity += this.lift
      this.touchingGround = false
    } 
    
    
  }
  
  update(){
    this.velocity += this.gravity
    this.y += this.velocity
    
    if(this.y >= height - this.size/2) {
      this.velocity = 0
      this.touchingGround = true
      this.y = height - this.size/2
    }
  }
  
  
}


