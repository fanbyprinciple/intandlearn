var table

function preload(){
    
    table = loadTable('sentiment_analysis/afinn/AFINN-111.txt', 'tsv')
    
    

}


function setup(){
    noCanvas()
    console.log(table)
    console.log('sentiment')
}

function draw(){}
