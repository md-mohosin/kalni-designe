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






const carousel = document.querySelector(".carousel")
const arrowBtns = document.querySelectorAll(".wrapper i")
const firstCardWidth = carousel.querySelector(".card").offsetWidth
const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth


// function updateArrowColor() {
//     if (carousel.scrollLeft <= 0) {
//         document.getElementById("left").style.background = 'white'
//     }
//     else {
//         document.getElementById("left").style.background = "linear-gradient(to right, #44bde2, #088aed)"
//     }

//     if (carousel.scrollLeft >= maxScrollLeft) {
//         document.getElementById("right").style.background = 'white'
//     }
//     else {
//         document.getElementById("right").style.background = "linear-gradient(to right, #44bde2, #088aed)"
//     }

// }

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // **This is the main line of code that creates a slider.**
        carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth
        // setTimeout(updateArrowColor, 100)
    })
})

// updateArrowColor()










const weekCarousel = document.querySelector(".weekProduct-carousel")
const weekCarouselLeftArrow = document.getElementById("weekCarousel-leftArrow")
const weekCarouselrightArrow = document.getElementById("weekCarousel-rightArrow")
const weekCarouselCard = document.querySelector('.weekProduct-carouselCard').offsetWidth


weekCarouselrightArrow.addEventListener("click", () => {
    weekCarousel.scrollLeft += weekCarouselCard
})
weekCarouselLeftArrow.addEventListener("click", () => {
    weekCarousel.scrollLeft += -weekCarouselCard
})











const popularCarouselLeftArrow = document.getElementById("popularCarousel-leftArrow")
const popularCarouselRightArrow = document.getElementById("popularCarousel-rightArrow")
const popularCarousel = document.querySelector(".popularCard-carousel")
const popularCardCarousel = document.querySelector(".poplularCarousel-card").offsetWidth

popularCarouselRightArrow.addEventListener("click", () => {
    popularCarousel.scrollLeft += popularCardCarousel
})

popularCarouselLeftArrow.addEventListener("click", () => {
popularCarousel.scrollLeft += -popularCardCarousel
})