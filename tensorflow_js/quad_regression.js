//poly regression not implemented
//the basis for degree 1 equation set
//go here next- 
//https://www.youtube.com/watch?v=tIXDik5SGsI&list=PLRqwX-V7Uu6YIeVA3dNxbR9PYj4wV31oQ&index=6

let xvals = []
let yvals = []

let a,b,c 

let dragging = false

const learningRate = 0.5
const optimizer = tf.train.adam(learningRate)

function setup(){
    createCanvas(200,200)
    a = tf.variable(tf.scalar(random(-1,1)))
    b = tf.variable(tf.scalar(random(-1,1)))
    c = tf.variable(tf.scalar(random(-1,1)))
}

function predict(x){
    const xs = tf.tensor1d(x)
    //xs.print()
    const ys = xs.square().mul(a).add(xs.mul(b)).add(c)
    //ys.print()
    return ys
}

function loss(pred,label){
    // pred.print()
    // console.log(label)
    return pred.sub(label).square().mean()
}

function mousePressed(){
    dragging = true
}

function mouseReleased(){
    dragging = false
}

function draw(){
    background(0)
    if (dragging){
        let x = map(mouseX,0,width,-1,1)
        let y = map(mouseY,0,height,1,-1)

        xvals.push(x)
        yvals.push(y)
    } else {
        // training magic
        // handled by optimizer
        if(xvals.length > 0){
            tf.tidy(()=>{
                // how the fuck is this line affecting m and b
                optimizer.minimize(()=> loss(predict(xvals),yvals))
                // console.log("m: ") 
                // m.print()
                // console.log("b: ") 
                // b.print()
            })
                
        }    
    }
    

    //print the points
    strokeWeight(8)
    stroke(255)
    for(let i=0; i <xvals.length;++i){
        let px = map(xvals[i],-1,1,0,width)
        let py = map(yvals[i],-1,1,height,0)
        //console.log(xvals,yvals)
        point(px, py)
    }

    // testing the prediction function
    let curveX = []
    for(let x = -1; x<1 ; x+=0.05){
        curveX.push(x)
    }

    let ys

    // printing the curve
    ys = tf.tidy(()=> predict(curveX))
    let curveY = ys.dataSync()
    ys.dispose()
            
    beginShape()
    noFill()
    stroke(255)
    strokeWeight(2)
    for (let i=0; i<curveX.length; ++i){
        let x = map(curveX[i], -1, 1, 0, width)
        let y = map(curveY[i],1,-1,0,height)
        vertex(x,y)
    }
    endShape()

    
    console.log("Number of tensors :", tf.memory().numTensors)
    
}