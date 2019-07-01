var tree

function setup() {
    createCanvas(600,600);
    background(60)
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
    
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
