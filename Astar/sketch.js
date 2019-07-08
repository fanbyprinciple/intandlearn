var cols = 25
var rows = 25
var grid = new Array(cols)

var openSet = []
var closedSet = []

var start, end
var w, h

var path = []

function removeFromArray(array, element) {
  //console.log("before:",array)
  for (var i = array.length - 1; i >= 0; i--) {
    //console.log(i)
    if (array[i] == element) {
      //console.log(i)
      array.splice(i, 1)
    }
  }
  //console.log("after:",array)

}

function heuristic(a,b) {
  //var distance = dist(a.i,a.j,b.i,b.j)
  var distance = abs(a.i-b.i) +abs(a.i-b.i)
  return distance
}

function Spot(i, j) {
  this.i = i
  this.j = j

  this.neighbhors = []
  this.previous = undefined
  this.f = 0
  this.g = 0
  this.h = 0
  // A* = f(x) = g(x) + h(x)

  this.addNeighbhors = function(grid) {
    if (i < cols - 1) {
      this.neighbhors.push(grid[this.i + 1][this.j])
    }

    if (i > 0) {
      this.neighbhors.push(grid[this.i - 1][this.j])
    }

    if (j < rows - 1) {
      this.neighbhors.push(grid[this.i][this.j + 1])
    }

    if (j > 0) {
      this.neighbhors.push(grid[this.i][this.j - 1])
    }
  }

  this.show = function(col) {
    fill(col)
    noStroke()
    rect(this.i * w, this.j * h, w - 1, h - 1)
  }
}


function setup() {
  createCanvas(400, 400);

  w = width / cols
  h = height / rows


  for (var l = 0; l < cols; l++) {
    grid[l] = new Array(rows)
    //console.log(grid[l])
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j)
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].addNeighbhors(grid)
    }
  }


  start = grid[0][0]
  end = grid[cols - 1][rows - 1]

  openSet.push(start)





  //console.log(grid)


}

function draw() {
  background(0);
  //console.log("frame")

  if (openSet.length > 0) {
    //keep going
    var winner = 0
    for (var i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[winner].f) {
        winner = i
      }
    }

    var current = openSet[winner]
    //console.log(current)

    if (current === end) {
      
      var temp = current 
      path.push(temp)
      while(temp.previous){
        path.push(temp.previous)
        temp = temp.previous
      }
      console.log("done!")
      
    }

    //openSet.remove(current)
    removeFromArray(openSet, current)
    closedSet.push(current)

    var neighbhors = current.neighbhors
  
    for (let i = 0; i< neighbhors.length; i++) {
      var neighbhor = neighbhors[i]
      

      if (!closedSet.includes(neighbhor)) {
        var tempG = current.g + 1

        if (openSet.includes(neighbhor)) {
          if (tempG < neighbhor.g) {
            neighbhor.g = tempG
          }
        } else {
          neighbhor.g = tempG
          openSet.push(neighbhor)
          
        }

        // add heuristics
        neighbhor.h = heuristic(neighbhor,end)
        neighbhor.f= neighbhor.g +neighbhor.h
        
        neighbhor.previous = current
        
      }
      //console.log(openSet)
    }

  } else {
    //no solution
    console.log("no solution")
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show(color(255, 204, 0))

    }
  }

  for (let k = 0; k < openSet.length; k++) {
    openSet[k].show('#0f0')
  }

  for (let l = 0; l < closedSet.length; l++) {
    closedSet[l].show('hsla(240, 100%, 50%, 0.5)')
  }

  for(let m = 0 ; m <path.length; m++){
    path[m].show(color(255,0,0))
    //console.log(path)
  }

}