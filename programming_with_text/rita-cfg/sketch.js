var rg

function setup(){
    noCanvas()

    rg = new RiGrammar()
    rg.loadFrom('grammar.json', grammarReady)

    function grammarReady(){
        console.log('ready')
    }
    // rg.addRule('<start>', 'The <N> <V>', 1)
    // rg.addRule('<N>', 'cat| dog')
    // rg.addRule('<V>', 'eats | sleeps | barks | meows')
    
    let button = select('#generate')
    button.mousePressed(generateText)

    let clear = select('#clear')
    clear.mousePressed(clearAll)

    function generateText(){
        let result = rg.expand()
        let par = createP(result)
        par.style('background-color', (120,160,220))
        par.class('text')
    }

    function clearAll(){
        let elements = select('.text')
        for (let i=0; i < elements.length; i++){
            elements[i].remove()
        }
    }
    
}

