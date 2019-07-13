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

    // population contains the individual letter array
    population = []

    // each letter is a DNA instance
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

}