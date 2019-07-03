function graph(){
  this.nodes = []
  this.graph = {}
  this.start = null
  this.end = null
}

graph.prototype.addNode = function(n) {
  this.nodes.push(n)
  var title = n.value
  this.graph[title] = n
  
}

graph.prototype.getNode = function(actor){
  var n = this.graph[actor]
 
  return n
  
}

graph.prototype.setStart = function (startActor) {
  return this.graph[startActor]
}


graph.prototype.setEnd = function (endActor) {
  return this.graph[endActor]
}