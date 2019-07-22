var rocket

var population

function setup() {
    createCanvas(400,300)
    

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

function Rocket() {
    this.pos = createVector(width/2,height-10)
    this.vel = p5.Vector.random2D()
    this.acc = createVector()

    this.applyForce = function(force){
        console.log("Hello")
        this.acc.add(force)
    }

    this.update = function() {
      
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc *= 0
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

