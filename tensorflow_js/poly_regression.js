//poly regression not implemented
//the basis for degree 1 equation set
//go here next- 
//https://www.youtube.com/watch?v=tIXDik5SGsI&list=PLRqwX-V7Uu6YIeVA3dNxbR9PYj4wV31oQ&index=6

let xvals = []
let yvals = []

let m,b 

const learningRate = 0.5
const optimizer = tf.train.sgd(learningRate)

function setup(){
    createCanvas(200,200)
    m = tf.variable(tf.scalar(random(1)))
    b = tf.variable(tf.scalar(random(1)))
}

function predict(x){
    const xs = tf.tensor1d(x)
    //xs.print()
    const ys = xs.mul(m).add(b)
    //ys.print()
    return ys
}

function loss(pred,label){
    // pred.print()
    // console.log(label)
    return pred.sub(label).square().mean()
}

function mousePressed(){
    let x = map(mouseX,0,width,0,1)
    let y = map(mouseY,0,height,1,0)

    xvals.push(x)
    yvals.push(y)
}

function draw(){
    background(0)

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

    //print the points
    strokeWeight(8)
    stroke(255)
    for(let i=0; i <xvals.length;++i){
        let px = map(xvals[i],0,1,0,width)
        let py = map(yvals[i],0,1,height,0)
        //console.log(xvals,yvals)
        point(px, py)
    }

    // testing the prediction function
    let lineX = [0,1]
    let ys

    tf.tidy(()=>{
        if(xvals.length > 0){
            ys = predict(lineX)
    
            // now drawing the line
            let x1 = map(lineX[0],0,1,0,width)
            let x2 = map(lineX[1],0,1,0,width)
            
            let lineY = ys.dataSync()
    
            let y1 = map(lineY[0],0,1,height,0)
            let y2 = map(lineY[1],0,1,height,0)
    
            strokeWeight(2)
            line(x1,y1,x2,y2)
        }
    })
    console.log("Number of tensors :", tf.memory().numTensors)
    
}