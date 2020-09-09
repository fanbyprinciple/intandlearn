let genNumber = 0
function nextGeneration(){
  console.log("generation: ", genNumber++)
  calculateFitness()
  
  for (let i=0; i < TOTAL; i++){
  pangos[i] = pickOne()
  }
  
  savedPangos = []
}

function pickOne(){
  let index = 0
  let r = random(1)
  while(r>0){
    r = r - savedPangos[index].fitness
    index++
  }
  index--
  let pango = savedPangos[index]
  let child = new Pangolin(pango.brain)
  child.mutate()
  return child
}


function calculateFitness(){

  let sum =0
  
  for(let pango of savedPangos){
    sum += pango.score
  }
  
  for(let pango of savedPangos){
    pango.fitness = pango.score / sum
  }
}