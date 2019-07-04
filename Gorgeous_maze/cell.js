function Cell(i,j,left,right,up,down){
  
  this.i = i
  this.j = j
  this.color = (random(255))
  this.left = left
  this.right = right
  this.up = up
  this.down = down
  
}

Cell.prototype.show = function(cells){
  var x = this.i*w
  var y = this.j*w
  //stroke(255)
  //noFill()
  //rect(x,y,w,w)
  if(!this.up){
    stroke(this.color)
    line(x,y,x+w,y)
  }
  if(!this.right){
    stroke(this.color)
    line(x+w,y,x+w,y+w)
  }
  if(!this.down){
    stroke(this.color)
    line(x+w,y+w,x,y+w)
  }
  if(!this.left){
    stroke(this.color)
    line(x,y,x,y+w)
  }
  
}