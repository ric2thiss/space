const crew__image = document.querySelector(".crew__image")

fetch("./data.json")
.then(response => response.json())
.then(data => {
    // console.log(data.crew[0].name)
    // console.log("Passed")
    crew__image.innerHTML = `<img src="${data.crew[0].images.png}" title="${data.crew[0].name}" style= "width: 60%" />
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
    return realData.crew[index].name
}

const radio_Btn = document.querySelectorAll(".radio_Btn");
const template = document.querySelector(".crew__Information")
// For Click Event
radio_Btn.forEach((btn, index) => 
    btn.addEventListener("click",async ()=>{
        // Test
        const name = await getInformation(index);
        


        const imageData = await getImage(index);
        crew__image.innerHTML = `<img src="${imageData}"style= "width: 60%" />
        `
        template.innerHTML = `
        <p class="role"></p>
        <p class="name" style="color:white">${name}</p>
        <p class="bio"></p>
        `
    })
)

// Set interval




