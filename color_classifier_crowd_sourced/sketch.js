let r, g, b
function setup(){
    createCanvas(400,400)
    

    let radio= createRadio()
    radio.option('red-ish')
    radio.option('blue-ish')
    radio.option('green-ish')

    let submit = createButton('submit')
    submit.mousePressed(sendData)

    noLoop()
}

function draw(){
    r = floor(random(256))
    g = floor(random(256))
    b = floor(random(256))

    background(r,g,b)
}

function sendData(){
    redraw()
    // integrate firebase for sending data
}