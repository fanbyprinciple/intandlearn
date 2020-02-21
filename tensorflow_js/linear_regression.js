




let x_vals = []
let y_vals = []

let m,b

const learningRate = 0.5
const optimizer = tf.train.sgd(learningRate)

function setup(){
    createCanvas(400,400)
    m = tf.variable(tf.scalar(random(1)))
    b = tf.variable(tf.scalar(random(1)))    
}

function draw(){

    tf.tidy(()=>{
        if(x_vals.length >0){
            const ys = tf.tensor1d(y_vals)
            optimizer.minimize(()=> loss(predict(x_vals),y_vals))
        
        }

    })
    
    
    background(0)

    stroke (255)
    strokeWeight(8)
    for (let i=0; i <x_vals.length ;++i){
        let px = map(x_vals[i],0,1,0, width)
        let py = map(y_vals[i],0,1, height,0)
        point(px,py)
    } 
    
    let ys = predict([0,1])

    //xs.print()
    //ys.print()

    //x1 and x2 are chosen so that the line come in the middle
    tf.tidy(()=>{
        let x1 = map(0,0,1,0,width)
        let x2 = map(1, 0 ,1, 0, width)

        let lineY = ys.dataSync()
        let y1 = map(lineY[0], 0, 1, height, 0)
        let y2 = map(lineY[1], 0, 1, height,0)

        strokeWeight(2)
        line (x1,y1, x2, y2)
    })
    
    
}

function loss(pred,label){
    return pred.sub(label).square().mean()
}

function predict(x){
    const xs = tf.tensor1d(x)
    // y = mx + b

    const ys = xs.mul(m).add(b) 
    return ys


}

function mousePressed(){

    let x = map(mouseX,0,width,0,1)
    let y = map(mouseY,0,height,1,0)

    x_vals.push(x)
    y_vals.push(y)
}