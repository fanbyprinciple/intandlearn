console.log("About to fetch the rainbow")


arra = ['rainbow.jpg', 'unicorn.jpg']

async function catchRainbow(){
    for(let i=0; i <arra.length; ++i){
        console.log(arra[i])
        const  response = await fetch(arra[i])
        const blob = await response.blob()
        //document.getElementById('rainbow').src = URL.createObjectURL(blob)
        console.log(URL.createObjectURL(blob))
        img = document.createElement("img")
        img.src = URL.createObjectURL(blob)
        img.width = '200'
        document.body.append(img)
        
    } 

}

async function catchPoem(){
    const response = await fetch("poem.txt")
    const text = await response.text()
    document.getElementById("poem").innerText = text
}



catchRainbow().then(response=>{
    console.log('yay')
}).catch(error=>{
    console.log(error)
})

catchPoem()



// equivalent to this code

// fetch('rainbow.jpg').then(response=>{
//     console.log(response)
//     return response.blob()
// }).then(blob =>{
//     console.log(blob)
//     document.getElementById('rainbow').src = URL.createObjectURL(blob)
// })
// .catch(error =>{
//     console.log(error)
// })