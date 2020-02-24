//for a feed forward neural network
const model = tf.sequential()

const configHidden = {
    units:4,
    inputShape: [2],
    activation:'sigmoid'

}

const configOutput = {
    units:3,
    //inputShape: [4],
    activation: 'sigmoid'
}


// dense layers means all nodes are connected
const hidden = tf.layers.dense(configHidden)
const output = tf.layers.dense(configOutput)

model.add(hidden)
model.add(output)

const optimizer = tf.train.sgd(0.1)
const configCompile = {
    optimizer: sgdOpt,
    loss: 'meanSquaredError'
}

model.compile(configCompile)