function Cell(i,j,left,right,up,down){
  
  this.i = i
  this.j = j
  this.color = 255
  this.left = left
  this.right = right
  this.up = up
  this.down = down
  this.visited = false
  
}

Cell.prototype.show = function(cells){
  var x = this.i*w
  var y = this.j*w
  
  stroke(255)
  
  if (this.visited){
  
  fill(255, 204, 0)
   rect(x,y,w,w)
  }
  
  //rect(x,y,w,w)
  if(!this.up){
    //stroke(this.color)
    line(x  ,  y  ,x+w  ,y)
  }
  if(!this.right){
    //stroke(this.color)
    line(x+w  ,y  ,x+w  ,y+w)
  }
  if(!this.down){
    //stroke(this.color)
    line(x+w  ,y+w  ,x  ,y+w)
  }
  if(!this.left){
    //stroke(this.color)
    line(x  ,y  ,x  ,y+w)
  }
  
}

Cell.prototype.checkNeighbhors =  function(){
  neighbhors = []
  
  var topCell = cells[index(this.i,this.j-1)]
  var rightCell = cells[index(this.i+1,this.j)]
  var bottomCell = cells[index(this.i,this.j+1)]
  var leftCell = cells[index(this.i-1,this.j)]
  
  if(topCell && !topCell.visited ){
   neighbhors.push(topCell) 
  }
  if(leftCell && !leftCell.visited){
   neighbhors.push(leftCell) 
  }
  if(bottomCell && !bottomCell.visited){
   neighbhors.push(bottomCell) 
  }
  if(rightCell && !rightCell.visited){
   neighbhors.push(rightCell) 
  }
  
  console.log(neighbhors)
  
  if(neighbhors.length >0){
    var r = floor(random(0,neighbhors.length))
    return neighbhors[r]
  } else {
    return undefined
  }
}