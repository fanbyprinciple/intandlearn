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

  console.log(graph)


}