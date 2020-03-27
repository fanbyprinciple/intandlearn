// mad libs generator that is creating funny story

// var txt = '$$Exclamtion$$ ! they said $$Adverb$$ as they jumped into their $$Noun$$ and flew off with their $$Adjective$$ $$PluralNoun$$.'
//var txt = '$$nnp$$ ! they said $$rb$$ as they jumped into their $$nn$$ and flew off with their $$jj$$ $$nns$$.'
var txt = '$$n$$ ! they said $$r$$ as they jumped into their $$n$$ and $$v$$ off with their $$a$$ $$n$$.'


function preload(){
    data1 = loadStrings('./wittgenstein.txt')
}

function setup(){
    noCanvas()
    

    var button = createButton('generate madlib')
    button.mousePressed(generate)
}

function replacer(match, pos){
    rm = new RiMarkov(4)
    rm.loadText(data1.join(' '))
    
    // lexicon depreciated
    // lexicon = new RiLexicon()
    // console.log(lexicon,lexicon.randomWord())
    
    //console.log(rm.generateTokens(2))
    //console.log(pos)
    do {
        word = rm.generateTokens(1)
    } while(word[0] && word[0].length > 3 && RiTa.getPosTags(word[0], true)[0] === pos)
    
    
    console.log(RiTa.getPosTags(word[0], true)[0])
    var entry = word[0]
    return word[0]
}

function generate(){
    var madlib = txt.replace(/\$\$(.*?)\$\$/g, replacer)
    createP (madlib)
}

function gotData(stuff, tabletop){
    data = stuff
}

