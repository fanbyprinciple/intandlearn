let mutationRate = 0.01
let totalPopulation = 150

// the pool of words initial setup
let population

// the pool for selection of next gen
let matingPool  

// teh phrase to find
let target 

let bestPhrase
let allPhrases
let stats

let generation 


function setup() {

    bestPhrase = createP("Best phrase:")
    bestPhrase.class("results")
    //bestPhrase.position(10,10)

    allPhrases = createP("All phrases:")
    allPhrases.position(600,10)
    allPhrases.class("all")

    stats = createP("Stats:");
    //stats.position(10,200);
    stats.class("stats");

    
    target = 'unicorn'

    // population contains the individual phrases array
    population = []
    generation = 0
    
    // each phrase is a DNA instance
    for(let i = 0; i <totalPopulation; i++){
        population[i] = new DNA(target.length)
    
    }
}

function draw() {

    frameRate(5)

    //calculating the fitness of each population element: a DNA instance
    for(let i = 0; i < population.length; i++){
        population[i].calcFitness(target)
        //console.log(population[i].fitness)
    }

    //frameRate(3)
    let matingPool =[]

    // pushing a population element into the mating pool corresponding to the fitness
    for(let i =0; i < population.length; i++){
        let nnnn = floor(population[i].fitness * 100)
        //console.log("nnnn: ",nnnn)
        for(let j = 0 ; j < nnnn ; j++){
            matingPool.push(population[i])
        }
    }
    //console.log("mating pool: ", matingPool)

    for(let i =0 ; i < population.length; i++){
        let a = floor(random(matingPool.length))
        let b = floor(random(matingPool.length))

        let partnerA = matingPool[a]
        let partnerB = matingPool[b]

        let child = partnerA.crossover(partnerB)
        child.mutate(mutationRate)
        population[i] = child

        // if(child.getPhrase() != target)
        //     { 
        //         child.mutate(mutationRate) 
        //         population[i] = child        
        //     }
        // else {

        //     console.log("found !No Loop: ")
        //     noLoop()
        // }
        
    }

    generation ++

    // If we find the target then stop

    let worldRecord = 0.0
    let index = 0
    let best  = population[index].getPhrase() 

    for(let i =0 ; i < population.length; i++) {
        //console.log(population[i].getPhrase())
        if(population[i].fitness > worldRecord){
            index = i
            worldRecord = population[i].fitness
            console.log("worldRecord:", worldRecord)
        }
    }

    //console.log("best fitness till now:", population[index].getPhrase())
    best = population[index].getPhrase()   

    // this is for showing all the phrases
    bestPhrase.html("<h1>Best phrase:<br>" + best + "</h1>")

    let statstext = "total generations:     " + generation + "<br>";
    let total = 0;
    for (let i = 0; i < population.length; i++) {
      total += population[i].fitness;
    }
    
    statstext += "average fitness:       " + nf((total/population.length)* 100) + "<br>";
    statstext += "total population:      " + totalPopulation + "<br>";
    statstext += "mutation rate:         " + floor(mutationRate * 100) + "%";

    stats.html(statstext);


    let everything = ""
    let displayLimit = min(population.length,30)

    for(let i = 0; i< displayLimit; i++){
        //if(i%4 == 0) everything += "<br>"
        everything +="<br>"
        everything += population[i].getPhrase() + "   "

    }
    
    
    allPhrases.html("All phrases:<br>" + everything)
    //noLoop()

    console.log("best from population: ", population[index].getPhrase())
    console.log("target: ", target)
    if(population[index].getPhrase() == target){
        console.log("noLoop")
        noLoop()
    }



}