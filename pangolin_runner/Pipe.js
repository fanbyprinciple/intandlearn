class Pipe {
  constructor(){
    this.x  = width
    this.w  = random([80,100,120])
    this.speed = 6
    this.highlight = false
    this.top = random(height /2 * 1.2, height/ 2* 1.8)
  }
   
  hits(pango){
    
    if(pango.x > this.x && pango.x < this.x + this.w) {
      if(pango.y > this.top && pango.y < height ){      
        return true
      } 
    }
    return false
  } 
  
  show() {
    if(this.highlight){
      
      fill(255,0,0)
    } else {
      fill(255)
    }
    //rectMode(CENTER)
    rect(this.x,this.top, this.w, height )
    
  }
  
  update(){
    this.x -= this.speed
  }
  
  offScreen(){
   if(this.x < - this.w){
     return true
   } else {
     return false
   }
  }
}

