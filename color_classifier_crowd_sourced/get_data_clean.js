let database

function setup(){
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

    var config = {
        apiKey: "AIzaSyDPekCKX4ee6h9NVR2lEITGAM0XIHn-c7c",
        authDomain: "color-classification.firebaseapp.com",
        databaseURL: "https://color-classification.firebaseio.com",
        projectId: "color-classification",
        storageBucket: "",
        messagingSenderId: "590040209608"
      };
    // Initialize Firebase
    firebase.initializeApp(config)
    database = firebase.database();

    let ref = database.ref('colors')
    ref.once('value', gotData)

}

function gotData(err, results){
    console.error(err)
    console.log(results)
}

function draw(){}