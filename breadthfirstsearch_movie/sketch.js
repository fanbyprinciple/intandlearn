var data
var graph

function preload() {
  data = loadJSON('bacon.json')
}

function setup() {
  graph = new graph()
  noCanvas()
  //console.log(data)
  var movies = data.movies;

  for (var i = 0; i < movies.length; i++) {
    var movie = movies[i].title
    var cast = movies[i].cast

    var movieNode = new node(movie)
    graph.addNode(movieNode)

    for (var j = 0; j < cast.length; j++) {
      var actor = cast[j]
      var actorNode = graph.getNode(actor)
      if (actorNode == undefined) {
           actorNode = new node(actor)
          }
      
      graph.addNode(actorNode)
      movieNode.connect(actorNode)
    }

  }
  
  var start = graph.setStart("Rachel McAdams")
  //var start = graph.setStart("Kevin Bacon")
  var end = graph.setEnd("Kevin Bacon")

  console.log(graph)
  
  var queue = [] 
  start.searched =  true
  queue.push(start)
  
  while (queue.length > 0){
    var current = queue.shift()
    if (current == end){
      console.log("Connection of", current.value)
      break;
    }
    //console.log(current.value)
    //console.log(end)
    
    var edges = current.edges;
    //console.log(edges[0])
    for (var k = 0 ; k < edges.length; k++){
      var neighbhor = edges[k]
      
      //console.log("neighbhor",neighbhor)
      
      if(!neighbhor.searched){
        neighbhor.searched = true
        neighbhor.parent =  current
        queue.push(neighbhor)
      } 
    }
      
  }
  //console.log("at fork in road")
  var path = []
  path.push(end)
  var next = end.parent
  while(next != null){
    path.push(next)
    next = next.parent
  }
  // var path =[] 
  // var l = 0
  // path.push(start)
  // while(path[l] != end){
  //   path.push(path[l].parent)
  //   console.log(path[l].parent)
  //   l = l+1
  // }
  
  for(var l = path.length-1 ; l > 0; l--){
    if(l%2 == 0){
      console.log("with")
    } else {
      console.log("who was in")
    }
    console.log(path[l].value)
  }
  
  console.log("with Kevin Bacon.")
  
 
}