let model
let targetLabel = 'C'
let state  = "collecting"
let colorLabel

//let trainingData = []

function setup(){
    createCanvas(400,400)
    colorLabel = {
        C : color(0,255,0),
        D : color(0,0,255),
        F : color(255,0,0)
    }
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
    colorWash()
}

let k = [25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400]
let l = [25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400]
let knumber
let lnumber

function colorWash(){
    console.log("color wash initiated")
    // doesn't work because of asynch callbacks
    // for( k=0; k < width; k+=25){
    //     for( l=0; l< height ;l+= 25){
    //         let inputs = {
    //             x : l,
    //             y : k
    //         }
    //         model.classify(inputs, gotResults)
    //     }
    // }

    k.forEach((kitem, kindex)=>{
        l.forEach((litem, lindex)=>{
            knumber = kitem
            lnumber = litem
            console.log(knumber)
            console.log(lnumber)
            let inputs = {
                x : kitem,
                y : litem
            }
            model.classify(inputs,gotResults)
        })
    })
}

function drawBubbles(results=null,x=null,y=null){
    stroke(0)
    noFill()
    if(state == "collecting"){
        for(let i=-2; i<3; ++i){
            ellipse(mouseX+random (-2,2), mouseY + random(-2,2),24,24)
        }
    } else if(state == "predicting"){
        labelColor = colorLabel[results[0].label]
        labelColor.setAlpha(Math.floor(results[0].confidence * 256))
        fill(labelColor)
        noStroke()
        ellipse(x, y, 24)
    }
    fill(0)
    noStroke()
    textAlign(CENTER, CENTER)

    if(state == "collecting"){
        text(targetLabel, mouseX,mouseY)
    } else if(state == "predicting"){
        text(results[0].label,x,y)
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
        //console.log(results)
        console.log(knumber,lnumber)
        drawBubbles(results,knumber,lnumber)
    }
}
