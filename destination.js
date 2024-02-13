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
    let description = document.querySelector(".tab_description")
    description.textContent =  data.destinations[0].description;
    let heading = document.querySelector(".tab_title")
    heading.textContent = data.destinations[0].name;
    let avg_distance = document.querySelector(".avg_distance")
    avg_distance.textContent = data.destinations[0].distance
    let travel_time = document.querySelector(".travel_time")
    travel_time.textContent = data.destinations[0].travel
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
            console.log(destination.distance)
            console.log("Passed")
            // 

            let heading = document.querySelector(".tab_title")
            let description = document.querySelector(".tab_description")
            let avg_distance = document.querySelector(".avg_distance")
            let travel_time = document.querySelector(".travel_time")

            heading.textContent = e;
            description.textContent = destination.description
            avg_distance.textContent = destination.distance
            travel_time.textContent = destination.travel

            let destination_image = document.querySelector(".destination_image")
            destination_image.innerHTML =
            `
              <img src="${destination.images.png}" width="50%"></img>
            `
           }
        }
    })
  }

