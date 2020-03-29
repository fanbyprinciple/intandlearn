var counts
var lines 
function preload(){
    
    lines = loadStrings('./programming_with_text/word_c_token/input.txt')
}

function setup(){
    createCanvas(600,600)
    counts = {}
    var allwords = lines.join('\n')
    var tokens = allwords.split(/\W+/)
    //console.log(tokens)

    tokens.forEach((element) => {
        token =  element.toLowerCase()
        if (!counts[token]){
            counts[token] = 1
        } else {
            counts[token] += 1
        }
    });

    //console.log(counts)
    Object.keys(counts).forEach((key)=>{
        let x = random(width-100)
        let y = random(height-100)
        textSize(counts[key]*8)
        text (key,x,y)
    })


}

function draw(){

}