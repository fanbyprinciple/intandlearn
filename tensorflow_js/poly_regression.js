// to be made

let xvalues = []
let yvalues = []

let coeffs = []

let degree = 3

function setup(){
    createCanvas(200,200)
    initCoeffs()
}

function initCoeffs(){
    for(let i=0; i < degree; ++i){
        coeffs[i] = tf.variable(tf.scalar(random(-1,1)))
    }

    // const ys
    for(let i=0; i < degree; ++i){
        // mumbo jumbo to do
    }
}

function predict(x){
    const xs = tf.tensor1d(x)


}

function draw(){
    background(0)

    //drawing the points
    for(let i=0; i < xvalues.length; ++i){
        strokeWeight(8)
        stroke(255)
        let px = map(xvalues[i],-1,1,0,width)
        let py = map(yvalues[i],-1,1,height,0)
        point(px,py)

    }
}

function mousePressed(){
    let x = map(mouseX, 0,width, -1,1)
    let y =  map(mouseY,0,height,1,-1)

    xvalues.push(x)
    yvalues.push(y)
}