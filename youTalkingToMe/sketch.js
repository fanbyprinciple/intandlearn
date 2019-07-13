let mutationRate = 0.01
let totalPopulation = 150

// the pool of words initial setup
let population

// the pool for selection of next gen
let matingPool  

// teh phrase to find
let target 

let display = ""

function setup() {

    display = createP("Beginning")
    display.class("results")
    display.position(10,10)

    target = 'you talking to me'

    // population contains the individual phrases array
    population = []

    // each phrase is a DNA instance
    for(let i = 0; i <totalPopulation; i++){

        population[i] = new DNA(target.length)
    
    }
}

function draw() {


    //calculating the fitness of each population element: a DNA instance
    for(let i = 0; i < population.length; i++){
        population[i].calcFitness(target)
    }

    let matingPool =[]

    // pushing a population element into the mating pool corresponding to the fitness
    for(let i =0; i< population.length; i++){
        let nnnn = floor(population[i].fitness * 100)
        for(let j = 0 ; j < nnnn ; j++){
            matingPool.push(population[i])
        }
    }

    for(let i =0 ; i < population.length; i++){
        let a = floor(random(matingPool.length))
        let b = floor(random(matingPool.length))

        let partnerA = matingPool[a]
        let partnerB = matingPool[b]

        let child = partnerA.crossover(partner)
        child.mutate(mutationRate)
        population[i] = child
    }

    // this is for showing all the phrases
    let everything = ""
    for(let i = 0; i< population.length; i++){
        if(i%4 == 0) everything += "<br>"
        everything += population[i].getPhrase() + "   "

    }
    textFont("Courier")
    display.html(everything)
    //noLoop()


}