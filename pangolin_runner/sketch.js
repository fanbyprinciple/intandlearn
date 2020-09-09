const TOTAL = 100

let pangos = [] 
var savedPangos = []
let pipes = []
var counter
var pipeCounterValues

let slider

let pipeScore
let highestScore
let genNumber 

function setup() {
  createCanvas(740, 400)
  for (let i=0; i < TOTAL; ++i){
    pangos[i] = new Pangolin()
  }
  pipeScore = 0
  genNumber = 0
  highestScore = pipeScore
  pipeCounterValues = [75]
  
  counter = 0
  
  slider = createSlider(1,10,1)
}

function draw() {
  
  for(let m=0; m<slider.value() ; m++){
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
        pipeScore+=1
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

  }
  
  
  background(0,120,255)
  
  for (let pango of pangos){
    pango.show()
  }
  
  for(let pipe of pipes){
    pipe.show()
  }
  
  fill(255)
  textSize(24)
  text("Current score: "+ pipeScore, 540,40 )
  text("High score: "+ highestScore, 540,70 )
  text("Generation: "+ genNumber, 540,100 )
  

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