function setup(){
    noCanvas()

    const values = []
    for(let i =0; i <15; i++){
        values[i] = random(0,100)
    }

    const shapeA = [5,3] // 5 rows 3 columns
    const shapeB = [3,5] // transpose

    const a = tf.tensor2d(values, shapeA)
    const b = tf.tensor2d(values,shapeB)

    const tb = b.transpose()

    // a.print()
    b.print()
    tb.print()

    const c = tb.add(a)

    console.log("Here comes the C")
    c.print()

    const d = a.mul([2])
    console.log("Here comes the d")
    d.print()

    const e = a.matMul(b)
    console.log("Here comes the e")
    e.print()
    // const vtense = tf.variable(tense)

    // //const data = tf.tensor([0,0,127.7,255,100,50,24,54],[2,2,2], 'int32')
    // tense.print()
    // // tense.data().then(function(stuff){
    // //     console.log(stuff)
    // // }) // async

    // console.log(tense.dataSync())
    //  // same thing as above but is synchronous
    // // console.log(tense.get(14)) //not working


    // //tense.set(0,10)
}
