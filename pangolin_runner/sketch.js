const TOTAL = 10

let pangos = [] 
var savedPangos = []
let pipes = []
var counter
var pipeCounterValues

function setup() {
  createCanvas(740, 400)
  for (let i=0; i < TOTAL; ++i){
    pangos[i] = new Pangolin()
  }
  pipeCounterValues = [75]
  
  counter = 0
}

function draw() {
  
  
  if (counter % random(pipeCounterValues) == 0){
    pipes.push(new Pipe())
  }
  counter ++
  
  for (let i=pipes.length - 1; i >= 0; i--){
    
    pipes[i].update()
    
    for(let j= pangos.length - 1; j>=0; j--){
      if(pipes[i].hits(pangos[i])){
        pipes[i].highlight = true
        savedPangos.push(pangos.splice(j,1)[0])

      }
    }
    
  
    if(pipes[i].offScreen()){
      pipes.splice(i,1)
    }
    
    for (let pango of pangos){
      pango.think(pipes)
      pango.update()
    }
    
    if(pangos.length === 0){
      counter =0
      nextGeneration()
      pipes = []
      
    }
    
    
  }
  
  background(0,120,255)
  
  for (let pango of pangos){
    pango.show()
  }
  
  for(let pipe of pipes){
    pipe.show()
  }
  

}

function mousePressed(){
  for (let pango of pangos){
    pango.up()
  }
  console.log("pango.up()")
}

// function keyPressed(){
//   if(key == ' '){
//     pango.up()
//   } 
  
  
// }