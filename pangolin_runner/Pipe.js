class Pipe {
  constructor(){
    this.x  = width
    this.w  = 80
    this.speed = 6
    this.highlight = false
    this.top = random(height / 6, 1/2 * height)
  }
   
  hits(pango){
    
    if(pango.x > this.x && pango.x < this.x + this.w) {
      if((pango.y) > height - (this.top + pango.size/2) ){
        //console.log("pango: ",pango.x,  pango.y, height - pango.y)
        //console.log("Pipe: ", this.x,  this.top)
      
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
    rectMode(CENTER)
    rect(this.x, height, this.w, this.top )
    
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

