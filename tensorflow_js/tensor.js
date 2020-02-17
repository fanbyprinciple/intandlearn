function setup(){
    noCanvas()

    const values = []
    for(let i =0; i <15; i++){
        values[i] = random(0,100)
    }

    const shape = [5,3] // 5 rows 3 columns
    const data = tf.tensor2d(values, shape)

    //const data = tf.tensor([0,0,127.7,255,100,50,24,54],[2,2,2], 'int32')
    data.print()
}
