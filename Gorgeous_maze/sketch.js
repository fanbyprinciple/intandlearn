var cols, rows
var w = 40
var cells = []

function setup() {
  createCanvas(400, 400);
  cols = floor(width/w)
  rows = floor(height/w)
  
  for(var i = 0 ; i < rows; i++)
    for(var j = 0 ; j < cols; j++){
    var cell = new Cell(i,j,Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2))
    cells.push (cell)
    }
}

function draw() {
  background(51);
  for(var i = 0 ; i < cells.length; i++){
    cells[i].show()
  }
}