var tree

function setup() {
    createCanvas(400,400);
    background(0)
    tree = new Tree()
    for (var i =0 ;i <=10 ; i++){
        tree.addValue(floor(random(0,100)))
    }
    tree.addValue(5)
    tree.addValue(3)

    console.log(tree)

    tree.traverse()
    
}




function draw() {
    fill (255)
    noStroke()
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
