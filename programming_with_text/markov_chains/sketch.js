
// var txt = "The unicorn is a legendary creature that has been described since antiquity as a beast with a large, pointed, spiraling horn projecting from its forehead. The unicorn was depicted in ancient seals of the Indus Valley Civilization and was mentioned by the ancient Greeks in accounts of natural history by various writers, including Ctesias, Strabo, Pliny the Younger, and Aelian.[1] The Bible also describes an animal, the re'em, which some translations have erroneously rendered with the word unicorn.[1] In European folklore, the unicorn is often depicted as a white horse-like or goat-like animal with a long horn and cloven hooves (sometimes a goat's beard). In the Middle Ages and Renaissance, it was commonly described as an extremely wild woodland creature, a symbol of purity and grace, which could only be captured by a virgin. In the encyclopedias its horn was said to have the power to render poisoned water potable and to heal sickness. In medieval and Renaissance times, the tusk of the narwhal was sometimes sold as unicorn horn."
var order = 2
var ngrams = {}
var beginnings = []
var button
let txt

function preload(){
    names = loadStrings('./programming_with_text/markov_chains/names.txt')

}

function setup(){
    noCanvas()
    for (var j=0; j <names.length; j++){
        let txt = names[j]   
        for(var i=0;i <txt.length - order + 1; i++){
            var gram = txt.substring(i, i+order)
            
            if(i==0){
                beginnings.push(gram)
            }
            if (ngrams[gram] === undefined){
                ngrams[gram] = []
            }
            ngrams[gram].push(txt.charAt(i + order))
        }
    }

    button = createButton("generate")
    button.mousePressed(markovIt)
    
}

function markovIt(){
    var currentGram = beginnings[Math.floor(Math.random()* beginnings.length)]
    let result = currentGram


    for(let i=0;i <20; ++i){
        var pos = ngrams[currentGram]
        if(!pos){
            break;
        }
        var next = pos[Math.floor(Math.random()* pos.length)]

        console.log(currentGram)
        result += next

        currentGram = result.substring(result.length - order, result.length)
    }

    createP (result)
    

}

