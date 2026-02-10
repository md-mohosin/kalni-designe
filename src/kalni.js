const navMenu = document.getElementById("nav-menu")
const menuImgsrc = "./src/images/menu.png"
const crossImgsrc = "./src/images/cross.png"
navMenu.addEventListener("click", () => {
    const isHidden = document.getElementById("hidden-nav").classList.toggle("hidden")

    if (isHidden) {
        navMenu.src = menuImgsrc
    }
    else{
        navMenu.src = crossImgsrc
    }

})