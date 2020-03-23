let r, g, b
let buttons
let database

function setup(){
    createCanvas(400,400)
    // Your web app's Firebase configuration
    // var firebaseConfig = {
    // apiKey: "AIzaSyAR3wlllxHdHRtDgHg76H61sTuKRRwUETo",
    // authDomain: "color-classification-be526.firebaseapp.com",
    // databaseURL: "https://color-classification-be526.firebaseio.com",
    // projectId: "color-classification-be526",
    // storageBucket: "color-classification-be526.appspot.com",
    // messagingSenderId: "290058293831",
    // appId: "1:290058293831:web:914feaf3606d9480825762",
    // measurementId: "G-W2N7W6ZPH1"
    // };

    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    database = firebase.database();


    // let radio= createRadio()
    // radio.option('red-ish')
    // radio.option('blue-ish')
    // radio.option('green-ish')

    // let submit = createButton('submit')
    // submit.mousePressed(sendData)

    buttons = []

    buttons.push(createButton("red-ish"))
    buttons.push(createButton("green-ish"))
    buttons.push(createButton("blue-ish"))
    buttons.push(createButton("purple-ish"))

    for (let i=0; i < buttons.length; i++){
        buttons[i].mousePressed(sendData)
    }

    noLoop()
}

function draw(){


    r = floor(random(256))
    g = floor(random(256))
    b = floor(random(256))

    background(r,g,b)
}

function sendData(){
    console.log(this.html())

    let colorDatabase = database.ref('colors')

    var data = {
        r : r,
        g : g,
        b : b,
        label : this.html()

    }

    console.log('saving data')

    let color = colorDatabase.push(data, finished)
    console.log("Firebase generated key: " + color.key)

    function finished(err){
        if (err){
            console.log("Oops something went wrong.")
            console.error(err)
        } else {
            console.log("Data savd successfully.")
        }
    }
    redraw()
    // integrate firebase for sending data
}