// Variables
// let destination_image = document.querySelector(".destination_image")



// Destination Functionalities
fetch("./data.json")
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then(data => {
    let destination_image = document.querySelector(".destination_image") 
    destination_image.innerHTML = 
    `
        <img src="${data.destinations[0].images.png}" width="50%"></img>
    `
    // for(let destinations of data.destinations){
    //     destination_image.innerHTML = 
    //     `
    //         <img src="${data.destinations[0].images.png}" width="50%"></img>
    //     `
    //     if(destinations.name === "Moon"){
    //         console.log('You are in Moon')
    //         console.log(data.destinations[0].images.png)
    //         destination_image.innerHTML = 
    //            `
    //         <img src="${data.destinations[0].images.png}" width="50%"></img>
    //            `
    //     }

    
    // }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  function destination(e){
    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        for(let destination of data.destinations){
           if(destination.name == e){
            // Checking
            console.log(destination.description)
            console.log("Passed")

            let heading = document.querySelector(".tab_title")
            let description = document.querySelector(".tab_description")
            heading.textContent = e;
            description.textContent = destination.description

            let destination_image = document.querySelector(".destination_image")
            destination_image.innerHTML =
            `
            <img src="${destination.images.png}" width="50%"></img>
            `
           }
        }
    })
  }

//   TEST

