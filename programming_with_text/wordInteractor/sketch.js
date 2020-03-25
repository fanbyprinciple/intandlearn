var textfield
var ouput
var submit

function setup(){
    noCanvas()
    textfield = select("#input")
    output = select('#output')
    submit = select("#submit")

    submit.mousePressed(newText)
}

function highlight(){
    this.height = 100
    this.style('background-color', color(random(255), random(255), random(255)))
    console.log(this.html())

    var s = this.html().replace()
}

function newText(){
    var s =  textfield.value()

    var words = s.split(/(\W+)/)
    for(var i=0; i < words.length; i++){
        var span1 = createSpan(words[i])
        span1.parent(output)
        // var span2 = createSpan(' ')
        // span2.parent(output)
        if( !/\W+/.test(words[i])){
            //span1.style('background-color', color(random(255), random(255), random(255)))
            span1.mouseOver(highlight)
        }
    }
    //console.log(words)
    //createP (s)
}