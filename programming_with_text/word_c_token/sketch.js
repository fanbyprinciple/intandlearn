var txt
var label = 'Click a circle.'

class Circle{
    constructor(token,index){
        this.word = str(token)
        this.index = index
        this.x = width/2
        this.y = 100 + this.index* 20
        this.size = count[this.word]*10
        this.colorR = random(255)
        this.colorG = random(255)
        this.colorB = random(255) 
        console.log(this.word)
        
    }

    show(){
        
        fill (this.colorR, this.colorG, this.colorB)
        ellipse(this.x, this.y ,this.size, this.size)
    }

    returnWord(){
        label = this.word + " : " + count[this.word]
    }


}

function mousePressed(){
    for(let n=0; n <circles.length; ++n){
        let d = dist(mouseX, mouseY, circles[n].x, circles[n].y)
        if (d < circles[n].size ){
            circles[n].returnWord()
        }
        
        
    }
}

function preload(){
    txt = loadStrings('./programming_with_text/word_c_token/input.txt')
}

let circles = []
function setup(){
    createCanvas(800,1800)
    var allwords = txt.join("\n")
    console.log(allwords)
    var tokens = allwords.split(/\W+/)
    console.log(tokens)
    create_dict(tokens)
    console.log(count)

    keys.sort(compare)

    function compare(a,b){
        return count[b] - count[a]
    }

    let index = 0
    tokens.forEach((element, index)=>{
        token = element.toLowerCase()
        circles.push(new Circle(token, index))

    })
    
    
    
}

let count = {}
let keys = []
function create_dict(tokens){
    tokens.forEach((element, index) => {
        token = element.toLowerCase()
        if(!/\d+/.test(token)){
            if(count[token]){
            
                count[token] += 1
            } else {
                console.log(token)
                keys.push(token)
                
                count[token] = 1
            
            }
        }
    });

}

function draw(){
    background(255)
    // for (var i=0; i < keys.length; i++){
    //     key = keys[i]
    //     fill (random(255), random(255), random(255))
    //     ellipse(width/2, 100 + i*10,count[key]*10, count[key]*10)
    //     //createDiv(key + " : " + count[key])
    // }

    circles.forEach((circle,index)=>{
        
        
        circle.show()
    })

    

    textSize(32)
    textAlign(CENTER, CENTER)
    fill(0)
    text(label, width/2 + 200, 100)
}