var srctxt

function preload(){
    srctxt = loadStrings('./programming_with_text/diasticMachine/input.txt')
}

function diastic(seed, words){

    let phrase = " "
    let currentWord = 0

    for(var i=0; i < seed.length; ++i){
        let c = seed.charAt(i)

        for(let j=currentWord; j <words.length; j++){
            if(words[j].charAt(i) == c) {
                let word = ""
                
                console.log(typeof(words[j]))
                for(let k=0; k < words[j].length ;++k){
                    if (words[j][k] == c){
                        word += words[j][k].toUpperCase()
                        console.log(word)
                    } else {
                        word += words[j][k]

                    }
                }

                phrase += word + " "
                currentWord += 1
                break;
            }
        }
    }

    return phrase

    
}

function setup(){
    noCanvas()

    srctxt = join(srctxt, '\n')
    words = splitTokens(srctxt, ' ,!.?')

    var seed = select("#seed")
    var submit = select("#submit")

    submit.mousePressed(()=>{
        console.log("diastic")
        var phrase = diastic(seed.value(), words)
        createP(seed.value())
        createP(phrase)
    })

}

function draw(){}