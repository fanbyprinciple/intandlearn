// mad libs generator that is creating funny story
var data 

var txt = '$$Exclamtion$$ ! they said $$Adverb$$ as they jumped into their $$Noun$$ and flew off with their $$Adjective$$ $$PluralNoun$$.'

function setup(){
    noCanvas()
    Tabletop.init({
        key: '15WyEmfu6B1UCzzqeacYnzI8lutrxF6uWvFDiSteBqTs',
        callback: gotData,
        simpleSheet: true
    })

    var button = createButton('generate madlib')
    button.mousePressed(generate)
}

function replacer(match, pos){
    var entry = random(data)
    return entry[pos]
}

function generate(){
    var madlib = txt.replace(/\$\$(.*?)\$\$/g, replacer)
    createP (madlib)
}

function gotData(stuff, tabletop){
    data = stuff
}

