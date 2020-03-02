
let points = []
let num_of_points = 100
let perceptron

let training
let trainingIndex

function setup() {
    createCanvas(300,300)
    perceptron = new Perceptron()
    let inputs = [-1,0.5]
    trainingIndex = 1
        
    for (let i=0 ; i < num_of_points; ++i){
        points[i] = new Point()
    }
    let guess = perceptron.guess(inputs)
}

function mousePressed(){
    points.forEach((point)=>{
        let inputs = [point.x, point.y]
        perceptron.train(inputs, point.label)
    })
}

function draw(){
    background(255)
    stroke (255,120,120)
    
    line (0,0,width,height)
    points.forEach((point)=>{        
        point.show()
    })

    points.forEach((point)=>{
        let inputs = [point.x, point.y]
        //perceptron.train(inputs,point.label)
        //now handled in mouseclick

        let guess = perceptron.guess(inputs)
        if(guess == point.label){
            fill (0,255,0)
        } else {
            fill(255,0,0)
        }
        noStroke()
        ellipse(point.x, point.y,4, 4)        
    })

    training = points[trainingIndex]
    console.log(trainingIndex)
    let inputs = [training.x, training.y]
    perceptron.train(inputs, training.label)
    trainingIndex++
    if (trainingIndex == points.length){
        //noLoop()
        trainingIndex = 0
    }
    

    
}

