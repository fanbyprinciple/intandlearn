let model
let targetLabel = 'C'
let state  = "collecting"

//let trainingData = []

function setup(){
    createCanvas(400,400)
    options = {
        inputs : ['x', 'y'],
        outputs: ['label'],
        task : 'classification'
    }
    model = ml5.neuralNetwork(options)
    background(255)
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
    stroke(0)
    noFill()
    if(state == "collecting"){
        for(let i=-2; i<3; ++i){
            ellipse(mouseX+random (-2,2), mouseY + random(-2,2),24,24)
        }
    } else if(state == "predicting"){
        fill(102,204,0)
        ellipse(mouseX, mouseY, 24)
    }
    fill(0)
    noStroke()
    textAlign(CENTER, CENTER)

    if(state == "collecting"){
        text(targetLabel, mouseX,mouseY)
    } else if(state == "predicting"){
        text(results[0].label,mouseX,mouseY)
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
