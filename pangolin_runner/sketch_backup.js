let pango 
let pipes = []
var counter

function setup() {
  createCanvas(740, 400);
  pango = new Pangolin()
  
  counter = 0
}

function draw() {
  
  background(0,120,255)
  
  if (counter % 75 == 0){
    pipes.push(new Pipe())
  }
  counter ++
  
  for (let i=pipes.length - 1; i >= 0; i--){
    pipes[i].show()
    pipes[i].update()
    
    if(pipes[i].hits(pango)){
      pipes[i].highlight = true  
    }
  
    if(pipes[i].offScreen()){
      pipes.splice(i,1)
    }
    
    
  }
  
  pango.show()
  pango.update()
}

function keyPressed(){
  if(key == ' '){
    pango.up()
  }
  
  
}