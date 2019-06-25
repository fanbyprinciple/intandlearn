var tree

function setup() {
    noCanvas();
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
    background(255);
    text("put your p5.js code here",10, frameCount % height);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
