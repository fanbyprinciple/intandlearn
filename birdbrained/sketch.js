const TOTAL = 500
let birds = [] 
var pipes = []
var savedBirds = []
var counter
let slider 
var max_score = 0

function keyPressed(){
  if(key == 'S'){
    let bird = birds[0]
    saveJSON(bird.brain, 'bird.json')
  }
}


function setup() {
  createCanvas(640, 480);
   counter = 0
  for(let i=0; i<TOTAL; ++i){
    birds[i] = new Bird()
  }
  slider = createSlider(1, 10 , 1)

  
}

function draw() {
  
   
  for (let m=0; m < slider.value(); m++){
  
    if(counter % 75== 0){
      pipes.push(new Pipe())
    }
    
    counter++

    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].update();

      for (let j = birds.length - 1; j >= 0; j--) {
        if (pipes[i].hits(birds[j])) {
          savedBirds.push(birds.splice(j, 1)[0]);
        }
      }

      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }

    for (let i = birds.length - 1; i >= 0; i--) {
      if (birds[i].offScreen()) {
        savedBirds.push(birds.splice(i, 1)[0]);
      }
    }



    for (let bird of birds) {
      bird.think(pipes);
      bird.update();
    }

    if(birds.length === 0){
      counter = 0
      nextGeneration()
      pipes = []
      //pipes.push(new Pipe())
    } else if(max_score < birds[0].game_score){
      max_score = birds[0].game_score
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
  textSize(16)
  text("Highest alive score : " + max_score,440,440)
}

