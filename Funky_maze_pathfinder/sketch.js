var cols, rows
var w = 10
var grid= []
var currentCell

function index  (i ,j){
  if(i<0 || j <0 || i > cols -1 || j > rows -1){
    console.log("for" ,i," ",j,":","-1")
  return -1
  }
  
  console.log("for" ,i," ",j,":",i+j * cols)
  return i + j * cols // (i+j)*cols
}

function setup() {
  createCanvas(400, 400);
  cols = floor(width/w)
  rows = floor(height/w)
  
  for (var j = 0 ; j < rows ; j++)
   for (var i=0; i < cols; i++ ){
     var cell = new Cell(i,j)
     grid.push(cell)
   } 
  
  currentCell = grid[0]
   
}

function draw() {
  background(51);
  frameRate(5)
  for(var i = 0; i < grid.length; i++){
    grid[i].show()
  }
  currentCell.visited = true
  currentCell.highlight()
  
  //Step 1
  console.log("neighbhors of : ", currentCell.i," ",currentCell.j )
  var next = currentCell.checkAround()
  if(next){
    next.visited = true
    
    //Step 3
    removeWalls(currentCell, next)
    
    // Step 4
    currentCell = next
    
  }


}

function Cell(i,j){
  this.i = i
  this.j = j
  this.walls = [true,true,true,true]
  this.visited = false
  
  this.show = function() {
    var x = this.i*w
    var y = this.j*w
    
    stroke(255)
    // noFill()
    // rect(x,y,w,w)
    if(this.walls[0])
      line(x,y,x+w,y)
    if(this.walls[1])
      line(x+w,y,x+w,y+w)
    if(this.walls[2])
      line(x,y+w,x+w,y+w)
    if(this.walls[3])
      line(x,y,x,y+w)
    
    if(this.visited) {
      noStroke()
      fill(255,0,255,100)
      rect(x,y,w,w)
    }
    
  }
  
  this.highlight = function() {  
    var x = this.i*w
    var y = this.j*w
    
    noStroke()
    fill(255,0,50,100)
    rect(x,y,w,w)
    
  
  }
  
  this.checkAround = function(){
    var neighbhors = []
    
    var top = grid[index(i,j-1)]
    var right = grid[index(i+1,j )]
    var bottom = grid[index(i,j+1)]
    var left = grid[index(i-1,j)]
    
    
    if(top && !top.visited ){
      neighbhors.push(top)
    }
    
    if(right && !right.visited){
      neighbhors.push(right)
    }
    
    if(bottom && !bottom.visited){
      neighbhors.push(bottom)
    }
    
    if(left && !left.visited){
      neighbhors.push(left)
    }
    
    if (neighbhors.length > 0){
      var r = floor(random(0, neighbhors.length))
      return neighbhors[r]
    } else {
      return undefined
    }
      
  }
}



function removeWalls(a, b){
   var xDiff = a.i - b.i
   if( xDiff === 1){
     a.walls[3] = false
     b.walls[1] = false
     
   } else if (xDiff === -1){
     a.walls[1] = false
     b.walls[3] = false  
   }
  
  var yDiff =  a.j - b.j
  if( yDiff === 1){
     a.walls[0] = false
     b.walls[2] = false
     
   } else if (yDiff === -1){
     a.walls[2] = false
     b.walls[0] = false  
   }
  
}









