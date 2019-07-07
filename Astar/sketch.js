var cols = 5
var rows = 5
var grid = new Array(cols)

var openSet = []
var closedSet = []

var start,end
var w,h

function Spot(i,j){
  this.x = i
  this.y = j
  
  this.f = 0
  this.g = 0
  this.h = 0
  
  this.show = function(col){
    fill(col)
    noStroke()
    rect(this.x*w,this.y*h,w-1,h-1)
  }
}


function setup() {
  createCanvas(400, 400);
  
  w = width/cols
  h = height/rows
  
  
  for (var l  =0; l< cols; l++){
    grid[l] = new Array(rows)
    //console.log(grid[l])
  }
  
  for(var i = 0 ; i < cols; i++){
  for (var j = 0 ; j  < rows; j++){
    grid[i][j] = new Spot (i,j)
    }
  }
  
  start = grid[0][0]
  end = grid[cols-1][rows-1]
  
  openSet.push(start)
  
  
  
  
  
  //console.log(grid)
  
  
}

function draw() {
  background(0);
  
  /*if(openSet.length > 0){
    //keep going
  } else {
    //no solution
  }*/
  
  for(var i = 0 ; i < cols; i++){
  for (var j = 0 ; j  < rows; j++){
    grid[i][j].show(color(255, 204, 0))
    
    }
  }
  
  for(var k =0 ; k <openSet.length; k++){
    openSet[k].show('#0f0')
  }
  
  for(var l=0; l <closedSet.length; l++){
    closedSet.show('hsla(160, 100%, 50%, 0.5)')
  }
  
  

  
  
}