var population
var lifespan = 200
var lifeP
var count = 0
var target

function setup() {
  createCanvas(400, 400);
  rocket = new Rocket()
  population = new Population()
  lifeP = createP()
  target = createVector(width/2,20)
}

function draw() {
  background(0);
  population.run()
  lifeP.html(count)
  
  count++
  if(count == lifespan){
    population = new Population()
    count = 0
  }
  
  
  ellipse(target.x,target.y,16,16)
}

function DNA(){
  this.genes = []
  for (var i = 0; i < lifespan; i++){
    this.genes[i] = p5.Vector.random2D() 
    this.genes[i].setMag(0.1)
  }
}

function Population(){
  this.rockets = []
  this.popsize = 100
  this.matingPool = []
  
  for (let i = 0; i < this.popsize;i++){
    this.rockets[i] =  new Rocket()
  }
  
  this.run = function() {
    for (let i = 0; i < this.popsize;i++){
    this.rockets[i].update()
    this.rockets[i].show()
    }
  
  }
  
  this.evaluate =function(){
    let maxfit = 0
    for(let i =0; i < this.popsize; i++){
      this.rockets[i].calcFitness()
      if(this.rockets[i].maxfit > maxfit ){
        maxfit = this.rockets[i].maxfit
      }
    }
    
    for(let i =0; i < this.popsize; i++){
      this.rockets[i].fitness /=maxfit
    }
    
    this.matingPool = []
    
    
  }
  
  
}

function Rocket() {
  this.pos = createVector(width/2, height)
  this.vel = createVector()
  //this.vel = p5.Vector.random2D()
  this.acc = createVector()
  this.dna = new DNA()
  this.fitness = 0
  
  this.calcFitness = function(){
    var d = dist(this.pos.x, this.pos.y,target.x,target.y)
    this.fitness = 1/d
  }
  
  this.applyForce =  function(force){
    this.acc.add(force)
  }
  
  this.update =function() {
    
    this.applyForce(this.dna.genes[count])
    
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
  }
  
  this.show =  function() {
    push()
    noStroke()
    fill(255,150)
    translate(this.pos.x,this.pos.y)
    rotate(this.vel.heading())
    rectMode(CENTER)
    rect(0,0,25,5)
    pop()
  }
  
}