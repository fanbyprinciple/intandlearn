var cols, rows
var w = 40
var cells = []
var currentCell

function index(i,j) {
  
  if(i<0 || j<0 || i >cols-1 || j >rows-1)
    return -1
  return i+j*cols
}

function setup() {
  createCanvas(400, 400);
  cols = floor(width/w)
  rows = floor(height/w)
  
  for(var j = 0 ; j < rows; i++)
    for(var i = 0 ; i < cols; j++){
    //var cell = new Cell(i,j,Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2))
    var cell = new Cell(i,j,1,1,1,1)
    cells.push (cell)
    }
  
  currentCell = cells[0]
}

function draw() {
  background(51);
  frameRate(5)
  currentCell.visited = true
  for(var i = 0 ; i < cells.length; i++){
    cells[i].show()
  }
  
  var next = currentCell.checkNeighbhors()
  if(next){
    next.visited = true
    currentCell = next
  }
  
}var cols, rows
var w = 40
var cells = []
var currentCell

function index(i,j) {
  
  if(i<0 || j<0 || i >rows-1 || j >rows-1)
    return -1
  return i+j*cols
}

function setup() {
  createCanvas(400, 400);
  cols = floor(width/w)
  rows = floor(height/w)
  
  for(var i = 0 ; i < rows; i++)
    for(var j = 0 ; j < cols; j++){
    //var cell = new Cell(i,j,Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2))
    var cell = new Cell(i,j,1,1,1,1)
    cells.push (cell)
    }
  
  currentCell = cells[0]
}

function draw() {
  background(51);
  frameRate(5)
  currentCell.visited = true
  for(var i = 0 ; i < cells.length; i++){
    cells[i].show()
  }
  
  var next = currentCell.checkNeighbhors()
  if(next){
    next.visited = true
    currentCell = next
  }
  
}var cols, rows
var w = 40
var cells = []
var currentCell

function index(i,j) {
  
  if(i<0 || j<0 || i >rows-1 || j >rows-1)
    return -1
  return i+j*cols
}

function setup() {
  createCanvas(400, 400);
  cols = floor(width/w)
  rows = floor(height/w)
  
  for(var i = 0 ; i < rows; i++)
    for(var j = 0 ; j < cols; j++){
    //var cell = new Cell(i,j,Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2))
    var cell = new Cell(i,j,1,1,1,1)
    cells.push (cell)
    }
  
  currentCell = cells[0]
}

function draw() {
  background(51);
  frameRate(5)
  currentCell.visited = true
  for(var i = 0 ; i < cells.length; i++){
    cells[i].show()
  }
  
  var next = currentCell.checkNeighbhors()
  if(next){
    next.visited = true
    currentCell = next
  }
  
}var cols, rows
var w = 40
var cells = []
var currentCell

function index(i,j) {
  
  if(i<0 || j<0 || i >rows-1 || j >rows-1)
    return -1
  return i+j*cols
}

function setup() {
  createCanvas(400, 400);
  cols = floor(width/w)
  rows = floor(height/w)
  
  for(var i = 0 ; i < rows; i++)
    for(var j = 0 ; j < cols; j++){
    //var cell = new Cell(i,j,Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2))
    var cell = new Cell(i,j,1,1,1,1)
    cells.push (cell)
    }
  
  currentCell = cells[0]
}

function draw() {
  background(51);
  frameRate(5)
  currentCell.visited = true
  for(var i = 0 ; i < cells.length; i++){
    cells[i].show()
  }
  
  var next = currentCell.checkNeighbhors()
  if(next){
    next.visited = true
    currentCell = next
  }
  
}var cols, rows
var w = 40
var cells = []
var currentCell

function index(i,j) {
  
  if(i<0 || j<0 || i >rows-1 || j >rows-1)
    return -1
  return i+j*cols
}

function setup() {
  createCanvas(400, 400);
  cols = floor(width/w)
  rows = floor(height/w)
  
  for(var i = 0 ; i < rows; i++)
    for(var j = 0 ; j < cols; j++){
    //var cell = new Cell(i,j,Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2))
    var cell = new Cell(i,j,1,1,1,1)
    cells.push (cell)
    }
  
  currentCell = cells[0]
}

function draw() {
  background(51);
  frameRate(5)
  currentCell.visited = true
  for(var i = 0 ; i < cells.length; i++){
    cells[i].show()
  }
  
  var next = currentCell.checkNeighbhors()
  if(next){
    next.visited = true
    currentCell = next
  }
  
}