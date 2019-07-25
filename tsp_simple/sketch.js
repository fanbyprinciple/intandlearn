var cities = []

var totalCities

function setup (){ 
    createCanvas(400,300)

    totalCities = 10

    for(let i= 0; i<totalCities ;++i){
        let v = createVector(random(width),random(height))
        cities[i] = v
    }
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

    swap(cities,floor (random(cities.length)), floor(random(cities.length)))

}

function swap (a, i,j){
    let temp = a[i]
    a[i] = a[j]
    a[j] = temp
}