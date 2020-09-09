class Pangolin {
  constructor(brain){
    this.x= random(70,80)
    this.y= random(height)
    this.size= 36
    this.touchingGround = false
    
    this.velocity = 0
    this.gravity = 0.6
    this.lift = -18
    
    this.score = 0
    this.fitness = 0
    
    if(brain){
      this.brain = brain.copy()
    } else {
      this.brain = new NeuralNetwork(3,3,2)
    }
  }
  
  show(){
    fill(255,100)
    ellipse(this.x, this.y, this.size, this.size)
  }
  
  up(){
    if(this.touchingGround){
      
      this.velocity += this.lift
      this.touchingGround = false
    } 
  }
  
  mutate(){
    this.brain.mutate(0.1)
  }
  
  think(pipes){
    
    let closest = null
    let closestD = Infinity
    for(let i=0; i< pipes.length; ++i){
      let d = (pipes[i].x + pipes[i].w) - this.x
      if (d < closestD && d>0){
        closest = pipes[i]
        closestD = d
      }
    }
    
    let inputs = []
    inputs[0] = closest.x/width
    inputs[1] = closest.top/height
    inputs[2] = closest.width/width
    let outputs = this.brain.predict(inputs)
    //console.log(outputs)
    if(outputs[0]>outputs[1]){
      
      this.up()
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


