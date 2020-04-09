let model
let targetLabel = 'C'
let state  = "collecting"

let notes = {
    C : 261.6256,
    D : 293.6648,
    E : 329.6276
}

let env,wave
//let trainingData = []

function setup(){
    createCanvas(400,400)

    env = new p5.Envelope()
    env.setADSR(0.05, 0., 0.5, 1)
    env.setRange(1.2,0)
    wave = new p5.Oscillator()

    wave.setType('sine')
    wave.start()
    wave.freq(440)
    wave.amp(env)

    options = {
        inputs : ['x', 'y'],
        outputs: ['label'],
        task : 'classification'
    }
    model = ml5.neuralNetwork(options)
    background(0)
}

function keyPressed() {
    if(key == 't'){
        state = 'training'
        console.log("training starting.")
        model.normalizeData()
        let options = {
            epochs : 200
        }
        model.train(options, whileTraining, finishedTraining)
    } else{
        targetLabel = key.toUpperCase()
    }
    
}

function whileTraining(epoch, loss){
    console.log('Current epoch : ', epoch, ' loss : ', loss.loss)
}

function finishedTraining() {
    console.log("Training finished")
    state = "predicting"
}

function drawBubbles(results=null){
    stroke(255)
    fill(0)
    if(state == "collecting"){
        for(let i=-2; i<3; ++i){
            ellipse(mouseX+random (-2,2), mouseY + random(-2,2),24,24)
        }
    } else if(state == "predicting"){
        fill(71, 18, 71)
        ellipse(mouseX, mouseY, 24)
    }
    fill(255)
    noStroke()
    textAlign(CENTER, CENTER)

    if(state == "collecting"){
        text(targetLabel, mouseX,mouseY)
        wave.freq(notes[targetLabel])
        env.play()

    } else if(state == "predicting"){
        text(results[0].label,mouseX,mouseY)
        wave.freq(notes[results[0].label])
        env.play()
    }
    
    
}

function mousePressed(){
    
    let inputs = {
        x : mouseX,
        y : mouseY
    }

    if(state == "collecting"){
        drawBubbles()
        
        let target = {
            label : targetLabel
        }
        
        model.addData(inputs, target)
    } else if (state == "predicting") {
        model.classify(inputs, gotResults)

    }

}

function gotResults(error,results){
    if(error){
        console.log(error)
    } else {
        console.log(results)
        drawBubbles(results)
    }
}
