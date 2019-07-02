function node(value){
  this.value = value 
  this.edges = []
  this.searched = false
  this.parent = null
}

node.prototype.connect = function(neighbhor) {
  this.edges.push(neighbhor)
}