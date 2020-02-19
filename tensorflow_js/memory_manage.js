function setup(){
    noCanvas()

    tf.tidy(mystuff)
    console.log("outside : ", tf.memory().numTensors)
}

function mystuff(){

    const values = []
    for (let i = 0 ; i < 15;++i){
        values[i]= random(0,100)
    }

    const shape = [5,3]


    const a = tf.tensor2d(values,shape,'int32')
    const b = tf.tensor2d(values, shape, 'int32')
    const bb = b.transpose()

    const c = a.matMul(bb)
}

function draw(){

    //mystuff()

    const values = []
    for (let i = 0 ; i < 15;++i){
        values[i]= random(0,100)
    }

    const shape = [5,3]

    tf.tidy(()=>{
        const a = tf.tensor2d(values,shape,'int32')
        const b = tf.tensor2d(values, shape, 'int32')
        const bb = b.transpose()

        const c = a.matMul(bb)
        console.log("hello")
    })
    

    //console.log("hello")

    //do something meaningful

    //and dispose the variables
    // a.dispose()
    // b.dispose()
    // c.dispose()
    // bb.dispose()


    console.log("inside : ", tf.memory().numTensors)
}