const crew__image = document.querySelector(".crew__image")
const template = document.querySelector(".crew__Information")

fetch("./data.json")
.then(response => response.json())
.then(data => {
    // console.log(data.crew[0].name)
    // console.log("Passed")
    crew__image.innerHTML = `<img src="${data.crew[0].images.png}" title="${data.crew[0].name}" style= "width: 60%" />
    `
    template.innerHTML = `
    <p class="role">${data.crew[0].role}</p>
    <p class="name">${data.crew[0].name}</p>
    <p class="bio">${data.crew[0].bio}</p>
    `
})



// Fetch data
async  function getImage(index) {
    const response = await fetch("./data.json")
    const realData = await response.json()
    return realData.crew[index].images.png
}
async  function getInformation(index) {
    const response = await fetch("./data.json")
    const realData = await response.json()
    return realData.crew[index]
}

const radio_Btn = document.querySelectorAll(".radio_Btn");
// For Click Event
radio_Btn.forEach((btn, index) => 
    btn.addEventListener("click",async ()=>{
        const data = await getInformation(index)
        
        const imageData = await getImage(index);
        crew__image.innerHTML = `<img src="${imageData}"style= "width: 60%" />
        `
        template.innerHTML = `
        <p class="role">${data.role}</p>
        <p class="name">${data.name}</p>
        <p class="bio">${data.bio}</p>
        `
    })
)

// Set interval 

setInterval(()=>{
    
},1000)




