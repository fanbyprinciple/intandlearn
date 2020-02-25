//for a feed forward neural network
//https://www.youtube.com/watch?v=Qt3ZABW5lD0&list=PLRqwX-V7Uu6YIeVA3dNxbR9PYj4wV31oQ

const model = tf.sequential()

const configHidden = {
    units:4,            
    inputShape: [2],
    activation:'sigmoid'

}

const configOutput = {
    units:1,
    //inputShape: [4],
    activation: 'sigmoid'
}


// dense layers means all nodes are connected
const hidden = tf.layers.dense(configHidden)
const output = tf.layers.dense(configOutput)

model.add(hidden)
model.add(output)


const sgdOpt = tf.train.sgd(0.1)

const configCompile = {
    optimizer: sgdOpt,
    loss: tf.losses.meanSquaredError
}

model.compile(configCompile)

const xs = tf.tensor2d([
    [0.25,0.95],
    [0.30,0.99],
    [0.80,0.20],
    [0.95,0.10]
])

const ys =  tf.tensor2d([
    [0],
    [0],
    [1],
    [1]
])

const config = {
    epochs: 5
}

// model.fit(xs,ys).then((response)=>{console.log(response.history.loss[0])})
// now using await

const inputs = tf.tensor2d[[0.25,0.92]]
train().then(()=>{
    console.log("training complete.")
    
    let out = model.predict(inputs)
    // ysS.print()
})

async function train(){
    for (let i=0; i<100; i++){
        const response = await model.fit(xs, ys)
        console.log(response.history.loss[0])
    }
    
}

// const xs = tf.tensor2d([[0.25,0.92]])

// let ys = model.predict(inputs)
// ys.print()