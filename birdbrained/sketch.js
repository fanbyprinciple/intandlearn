const TOTAL = 500
let birds = [] 
var pipes = []

var savedBirds = []
var counter

let slider 

function keyPressed(){
  if(key == 'S'){
    let bird = birds[0]
    saveJSON(bird.brain, 'bird.json')
  }
}


function setup() {
  counter = 0
  createCanvas(640, 480);
  for(let i=0; i<TOTAL; ++i){
    birds[i] = new Bird()
  }
  slider = createSlider(1, 10 , 1)

  
}

function draw() {
  
  for (let m=0; m < slider.value; ++m){
  
    
    if(counter % 75== 0){
      pipes.push(new Pipe())
    }
    
    counter++

    for(var i=pipes.length-1; i>=0; i--){
      //pipes[i].show()
      pipes[i].update()

      for(let j=birds.length -1; j >=0; j--){
        if(pipes[i].hits(birds[j])){
             savedBirds.push(birds.splice(j,1)[0])
           }
      }

      if(pipes[i].offscreen()){
        pipes.splice(i, 1)
      }
    }
    
    for (let i = birds.length - 1; i >= 0; i--) {
      if (birds[i].offScreen()) {
        savedBirds.push(birds.splice(i, 1)[0]);
      }
    }


    for(let i=0; i< TOTAL; +i){
      //birds[i].show()
      birds[i].think(pipes)
      birds[i].update()

    }

    if(birds.length === 0){
      counter = 0
      nextGeneration()
      pipes = []
      //pipes.push(new Pipe())
    }

    
  }
  //all the drawing stuff
  background(0);
  
  for (let bird of birds){
    bird.show()
  }
  
  for (let pipe of pipes){
    pipe.show()
  }
}

// function keyPressed(){
//   if(key == ' '){
//     bird.up()
    
//   }
//}