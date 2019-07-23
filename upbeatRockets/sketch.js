var rocket
var lifespan
var population

function setup() {
    createCanvas(400,300)
    lifespan = 200
    

    rocket = new Rocket()

    population = new Population()

}

function draw() {
    background(50)

    population.run()

}

function Population() {
    this.rockets = []
    this.popsize = 100

    for (let i=0;i < this.popsize; i++){
        this.rockets[i] = new Rocket()
    }

    this.run = function() {
        for (let i=0;i < this.popsize; i++){
            this.rockets[i].update()
            this.rockets[i].show()
        }

    }
}

function DNA() {
    this.genes=[]
    for(let i =0; i <lifespan ; ++i){
        this.genes[i] = p5.Vector.random2D()
        this.genes[i].setMag(0.1)
    }



}

function Rocket() {
    this.pos = createVector(width/2,height)
    this.vel = createVector()
    this.acc = createVector()
    this.dna = new DNA()
    this.count = 0

    this.applyForce = function(force){
        this.acc.add(force)

    }

    this.update = function() {
        this.applyForce(this.dna.genes[this.count])
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.mult(0)
        this.count +=1
    }

    this.show = function() {
        push()
        noStroke()
        fill (255,150)
        translate(this.pos.x, this.pos.y)
        rotate(this.vel.heading())
        rectMode(CENTER)
        rect(0,0,50,10)
        pop()
    }

}

