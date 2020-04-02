// var rules = {
//     "S" :[["The", "N", "V"]],
//     "N" : [["farmer"], ["king"] , ["knight"]],
//     "V" : [["toils"] , ["battles"] , ["conquers"]]
// }



var rules = {
    "S": [
      ["NP", "VP"],
      ["Interj", "NP", "VP"]
    ],
    "NP": [
      ["Det", "N"],
      ["Det", "N", "that", "VP"],
      ["Det", "Adj", "N"]
    ],
    "VP": [
      ["Vtrans", "NP"],
      ["Vintr"]
    ],
    "Interj": [
      ["oh"],
      ["my"],
      ["wow"],
      ["darn"]
    ],
    "Det": [
      ["this"],
      ["that"],
      ["the"]
    ],
    "N": [
      ["amoeba"],
      ["dichotomy"],
      ["seagull"],
      ["trombone"],
      ["overstaffed"],
      ["corsage"]
    ],
    "Adj": [
      ["bald"],
      ["smug"],
      ["important"],
      ["tame"],
      ["overstaffed"],
      ["corsage"]
    ],
    "Vtrans": [
      ["computes"],
      ["examines"],
      ["foregrounds"],
    ],
    "Vintr": [
      ["coughs"],
      ["daydreams"],
      ["whines"],
    ]
  };

function setup(){
    noCanvas()

    let button = select('#generate')
    button.mousePressed(generateAll)

}

function expand(start, expansion, i){
    //console.log(i, ":", start, expansion)
    if(rules[start]){
        //var pick = rules[start][Math.floor(Math.random()*rules[start].length)]
        var pick = random(rules[start])
        console.log(pick)
        for (var i=0; i < pick.length; i++){

            expand(pick[i], expansion, i)
        }
    } else {
        expansion.push(start)
        // console.log(start, expansion)
    }
    return expansion.join(" ")
}


function generateAll(){
    var start = "S"
    var expansion = []
    var result = expand(start, expansion)
    createP (result)
}
