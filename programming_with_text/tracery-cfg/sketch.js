var story = {
    "start" : ["#[hero:#character#]story#"],
    "story" : ["A #hero# fights the #monster.s#. The #hero# fights valiantly into the #adj# night. Unknown to him, #monster# was preparing a #adj# blow."],
    "adj": ["dark", "gloomy", "thunderous", "tumultous", "stormy", "disturbing"],
    "character": ["dragon","elf", "knight", "pugilist"],
    "monster": ["dragon","elf", "knight", "pugilist"]
}

var grammar

function setup(){
    noCanvas();
    grammar = tracery.createGrammar(story)

    var button = select('#generate')
    button.mousePressed(generate)

    var clear = select('#clear')
    clear.mousePressed(clearAll)
}

function clearAll(){
    let elements = grammar.flatten('.text')
    for (let i=0; i <elements.length; i++){
        elements[i].remove()
    }
}

function generate(){
    let expansion = grammar.flatten('#start#')
    let par = createP(expansion)
    par.style('background-color', (120,160,200))
    par.class('text')
}


