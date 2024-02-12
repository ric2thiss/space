const toggle_menu = document.querySelector('#toggle_menu')
const primaryNav = document.querySelector('.primary_nav')

toggle_menu.addEventListener("click",()=>{
    const visibility = primaryNav.getAttribute('data-visible');
    if(visibility === "false") {
        primaryNav.setAttribute('data-visible',true)
    }else{
        primaryNav.setAttribute('data-visible', false)
    }


    console.log(visibility)
})
