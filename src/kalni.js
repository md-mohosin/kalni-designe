// create hidden sidebar

const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById("sidebar")


menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active")
    sidebar.classList.toggle("active")
    if (sidebar.classList.contains("active")) {
        document.body.style.overflow = 'hidden'
    }
    else {
        document.body.style.overflow = 'auto'
    }
})





// create slider

const carousel = document.querySelector(".carousel")
const arrowBtns = document.querySelectorAll(".wrapper i")
const firstCardWidth = carousel.querySelector(".card").offsetWidth

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // **This is the main line of code that creates a slider.**
        carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth
    })
})