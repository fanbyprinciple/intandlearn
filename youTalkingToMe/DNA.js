// used to create the initial population

function newChar() {

    let c = floor(random(64,122))
    if(c === 64) c = 32

    return String.fromCharCode(c)
}

class DNA {
    //num represents phrase length
    constructor(num) {
        this.genes = []
        this.fitness = 0
        for (let i = 0; i < num; i++){
            this.genes[i] = newChar()
        }
    }


    //return genes array as a string
    getPhrase() {
        return this.genes.join("")
    }


    // calculating the fitness
    calcFitness(target){
        let score = 0
        for (let i=0; i , this.genes.length; i++ ){
            if(this.genes[i] == target.charAt(i)){
                score++
            }
        }
        this.fitness = score / target.length
    }

    // creating the next generation
    crossover(partner) {

        let child = new DNA(this.genes.length)

        let midpoint = floor(random(this.genes.length))

        for(let i= 0; i < this.genes.length; i ++){
            if(i > midpoint) child.genes[i] = this.genes[i]
            else child.genes[i] = partner.genes[i]

        }
        return child
    }

    // Adds the probability of adding a random new character to the population
    mutate(mutationRate){

        for(let i = 0; i < this.genes.length; i++){
            if(radom(1)< mutationRate){
                this.genes[i] = newChar()
            }
        }
    }
}