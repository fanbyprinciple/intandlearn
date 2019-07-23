var rocket
var lifespan
var population
var lifespan
var count = 0
var target
var generation = 0

function setup() {
    createCanvas(400,300)
    lifespan = 200
    lifeP = createP()
    target= createVector(width/2, 50)

    


    population = new Population()

    

}

function draw() {
    background(50)

    population.run()
    lifeP.html("lifespan: "+ count +"<br>generation: "+ generation)
    count++

    
    if(count == lifespan){
     //population =new Population()
     population.evaluate()
     population.selection()
     count = 0
     generation++
    }

    
    rect(100,150,200,10)


    ellipse(target.x,target.y,18,18)
}

function Population() {
    this.rockets = []
    this.popsize = 25
    this.matingPool = []

    for (let i=0;i < this.popsize; i++){
        this.rockets[i] = new Rocket()
    }

    this.evaluate=function(){
        
        let maxfit =0
        for (let i=0;i < this.popsize; i++){
            this.rockets[i].calcFitness()
            if(this.rockets[i].fitness > maxfit){
                maxfit  = this.rockets[i].fitness
                //console.log("maxfit not zero    ")
            }
        }

        createP(maxfit)
         
        for (let i=0;i < this.popsize; i++){
            this.rockets[i].fitness /= maxfit
        }

        // for(let i=0;i <this.popsize; ++i){
        //     console.log(this.rockets[i])
        // }
        
        this.matingPool = []

        for (let i=0;i < this.popsize; i++){
            
            let n = this.rockets[i].fitness*100
            //console.log("inside evaluate:", this.rockets[0].fitness)
            for(let j =0; j <n ;j ++){
                this.matingPool.push(this.rockets[i])
            }
        }
    }

    this.selection =function() {
        let newRockets =[]
        for (let i = 0;i<this.rockets.length; i++){
            let parentA = random(this.matingPool).dna
            let parentB = random(this.matingPool).dna
            let child = parentA.crossover(parentB)
            child.mutation()
            newRockets[i] = new Rocket(child)

        }
        this.rockets = newRockets
        

    }

    this.run = function() {
        for (let i=0;i < this.popsize; i++){
            this.rockets[i].update()
            this.rockets[i].show()
        }

    }


}

function DNA(genes) {
    if(genes){
        this.genes = genes
    } else {
    this.genes=[]
    for(let i =0; i <lifespan ; ++i){
        this.genes[i] = p5.Vector.random2D()
        this.genes[i].setMag(0.1)
        }
    }
    this.crossover = function(partner) {
        let newgenes = []
        let midpoint = floor(random(this.genes.length))
        for (let i =0; i < this.genes.length; i++){
            if (i >midpoint){
                newgenes[i] = this.genes[i]
            } else {
                newgenes[i] = partner.genes[i]
            }
        }

        return new DNA(newgenes)
    }

    this.mutation =function(){
        for (let i =0; i < this.genes.length; i++){
            if(random(i) <0.01){
                this.genes[i] = p5.Vector.random2D()
                this.genes[i].setMag(0.1)
            }
        }
        
    }


}

function Rocket(dna) {
    this.pos = createVector(width/2,height)
    this.vel = createVector()
    this.acc = createVector()

    this.completed = false

    if(dna){
        this.dna = dna
    } else {
    this.dna = new DNA()
    }                                                                                                                            
    this.fitness =0

    this.applyForce = function(force){
        this.acc.add(force)

    }

    this.calcFitness = function(){
    
        let d = dist(this.pos.x,this.pos.y,target.x,target.y)

        this.fitness = map(d,0,width,width,0)
        if(this.completed){
            this.fitness *= 10
        }
        


    }

    this.update = function() { 
        this.applyForce(this.dna.genes[count])
        if(!this.completed){
            this.vel.add(this.acc)
            this.pos.add(this.vel)
            this.acc.mult(0)
        }
        
        
    }

    this.show = function() {
        push()
        noStroke()
        fill (255,150)
        translate(this.pos.x, this.pos.y)
        rotate(this.vel.heading())
        rectMode(CENTER)
        rect(0,0,25,5)
        pop()
    }

}

