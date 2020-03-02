function sign(sum){
    if(sum >=0){
        return 1
    } else {
        return -1
    }
}

function f(x){
    return 0.3*x +0.2
}

let trainButton

class Brain{
    constructor(n){
        this.weights = []
        this.weightLength = n
        //x,y,bias
        this.lr = 0.1
        for(let i=0; i<this.weightLength ; i++){
            this.weights[i] = random(-1,1)
        }

    }

    guess(inputs){
        let sum = 0
        for(let i=0; i <this.weightLength; i++){
            sum += inputs[i] * this.weights[i]
        }

        return sign(sum)
    }

    train(inputs, target){
        let guess = this.guess(inputs)
        let error = target - guess

        for (let i=0;i <this.weights.length; ++i){
            this.weights[i] += error * inputs[i] * this.lr
        }
    }

    guessY(x){
        // let m = this.weights[1]/ this.weights[0]
        // let b = this.weights[2]

        return (this.weights[2]/this.weights[1]) + this.weights[0]/this.weights[1] * x 
        // return m * x + b
    }

}

class Dot {
    
    constructor(x,y){
        if(x != null){
            this.x = x
        } else this.x = random(-1,1)
        
        if(y != null){
            this.y = y
        } else this.y = random(-1,1)
        
        this.bias = 1

        let lineY = f(this.x) 
        if(this.y > lineY){
            this.label = 1
        } else {
            this.label = -1
        }
    }

    getX(){
        return map(this.x,-1,1,0,width)
    }

    getY(){
        return map(this.y,-1,1,height,0)
    }

    show(){
        stroke (0)
        if(this.label == 1){
            fill (255)
        } else {
            fill (51)
        }
        let px = this.getX()
        let py = this.getY()

        ellipse(px, py, 32, 32)
    }
}

function brainTrain(){
    dots.forEach((dot)=>{
        let inputs = [dot.x, dot.y, dot.bias]
        brain.train(inputs, dot.label)
    })    
}


let dots = []
let num_of_dots = 100
let brain

function setup(){
    createCanvas(400,400)
    brain = new Brain(3)

    trainButton = createButton('train me daddy!')
    trainButton.mousePressed(brainTrain)
    
    for(let i=0; i<num_of_dots; ++i){
        dots[i] = new Dot()
    }
}



function draw(){
    background(0)

    stroke(255)
    //line (0,width,height,0)

    let d1 = new Dot(-1, f(-1))
    let d2 = new Dot (1, f(1))
    
    line(d1.getX(), d1.getY(), d2.getX(), d2.getX())

    let d3 = new Dot(-1, brain.guessY(-1))
    let d4 = new Dot(1, brain.guessY(1))
    
    line(d3.getX(), d3.getY(), d4.getX(), d4.getY())
    
    dots.forEach((dot)=>{
        dot.show() 
    })

    dots.forEach((dot)=>{
        let inputs = [dot.x, dot.y, dot.bias]

        let guess = brain.guess(inputs)
        if(guess == dot.label){
            fill(0,255,0)
        } else {
            fill(255,0,0)
        }
        noStroke()
        ellipse(dot.getX(),dot.getY(),16,16)
    })
}