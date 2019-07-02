function graph(){
  this.nodes = []
  this.graph = {}
}

graph.prototype.addNode = function(n) {
  this.nodes.push(n)
  var title = n.value
  console.log("hi4")
  this.graph[title] = n
  
}

graph.prototype.getNode = function(actor){
  var n = this.graph[actor]
  console.log("getNode handled")
  return n
  
}