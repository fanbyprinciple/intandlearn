function setup() {
  createCanvas(600, 600);
}

function draw() {
  //background(220);
  const redVal = map(mouseX,0, width,0,255)
  const greenVal = map(mouseY, 0, height,0,255)
  fill(mouseX, redVal,mouseY)
  noStroke()
  ellipse(mouseX, mouseY,50)
  
  translate(mouseX, mouseY )
  const rotation = map(mouseX, 0,height, 0, TWO_PI)
  rotate(rotation)
  stroke(redVal, greenVal, 255)
  line(-50, 0, 50, 0)
  text()
  
}