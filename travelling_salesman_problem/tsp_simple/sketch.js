var cities = []

var totalCities

var recordDistance

var bestEver

function setup (){ 
    createCanvas(400,300)

    totalCities = 10

    bestEver = cities.slice()

    for(let i= 0; i<totalCities ;++i){
        let v = createVector(random(width),random(height))
        cities[i] = v
    }

    let d = calcDistance(cities)
    recordDistance = d
}

function draw(){
    background(0)

    fill (255)
    for(let i= 0; i<cities.length ;++i){
        ellipse(cities[i].x, cities[i].y,9,9)
    }

    stroke (255)
    strokeWeight(2)
    noFill ()
    beginShape()
    for(let i= 0; i<cities.length ;++i){
        vertex(cities[i].x, cities[i].y)
    }
    endShape()


    stroke (255,0,255)
    strokeWeight(4)
    noFill ()
    beginShape()
    for(let i= 0; i<bestEver.length ;++i){
        vertex(bestEver[i].x, bestEver[i].y)
    }
    endShape()


    swap(cities,floor (random(cities.length)), floor(random(cities.length)))

    let d = calcDistance(cities)

    if (d < recordDistance) {
        recordDistance = d
        bestEver = cities.slice()
    }

}

function swap (a, i,j){
    let temp = a[i]
    a[i] = a[j]
    a[j] = temp
}

function calcDistance(points){
    let sum = 0

    for(let i=0; i <points.length-1; ++i){
        var d =dist(points[i].x, points[i].y,points[i+1].x,points[i+1].y)
        sum += d
    }

    return sum
}