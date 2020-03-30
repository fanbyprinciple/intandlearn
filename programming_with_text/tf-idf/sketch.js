var txt = []
var allwords = []
var files = ['eclipse.txt', 'fish.txt', 'phadke.txt', 'tree.txt']

let count = {}
let keys = []

function preload(){
    for (var i=0; i< files.length; ++i){
        txt[i] = loadStrings('./'+ files[i])
    }
    
    console.log("Text loaded !")
}

function setup(){
    
    for (let i=0; i< txt.length ; ++i){
        allwords[i] = txt[i].join("\n")        
    }

    tokens = allwords[0].split(/\W+/)
    create_dict(tokens)
    
    keys.sort(compare)
    
    function compare(a,b){
        return count[b].df - count[a].df
    }

    for(var i=0; i < keys.length; i++){
        var word = keys[i]

        var tfdf = count[word]
        var tfidf = tfdf.tf * log(files.length / tfdf.df)
        
        createDiv(word + " : " + tfdf.tf + " : " + tfidf)
    }

   
    // for(var i = 0; i <keys.length; i++){
    //     key = keys[i]
    //     createDiv(key + " : " + count[key].tf + " : " + count[key].df)
    // }
}



function create_dict(tokens){
    tokens.forEach((element, index)=>{
        token = element.toLowerCase()
        if(!/\d+/.test(token)){
            if(count[token]){
                count[token].tf += 1
            } else {

                keys.push(token)

                count[token] = {
                    tf : 1,
                    df : 1
                }
            }
        }
    })

    var othercounts  = []
    for (var j = 1; j < allwords.length; j++){
        var tempcounts = {}
        var tokens = allwords[j].split(/\W+/)
        for (var k =0; k < tokens.length ; k++){
            var w = tokens[k].toLowerCase()
            if (tempcounts[w] === undefined){
                tempcounts[w] = true;
            }
        }
        othercounts.push(tempcounts)
    }

    for (var i = 0; i < keys.length; i++){
        word = keys[i]
        
        for(var j=0; j < othercounts.length; j++){
            var tempcounts = othercounts[j]
            if (tempcounts[word]){
                count[word].df += 1
            }
        }
            
    }

    
}


function draw(){

    background(255)
}

