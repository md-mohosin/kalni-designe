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


function updateArrowColor() {
    if (carousel.scrollLeft <= 0) {
        document.getElementById("left").style.background = 'white'
    }
    else {
        document.getElementById("left").style.background = "linear-gradient(to right, #44bde2, #088aed)"
    }

    if (carousel.scrollLeft >= maxScrollLeft) {
        document.getElementById("right").style.background = 'white'
    }
    else {
        document.getElementById("right").style.background = "linear-gradient(to right, #44bde2, #088aed)"
    }

}

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // **This is the main line of code that creates a slider.**
        carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth
        setTimeout(updateArrowColor, 100)
    })
})

updateArrowColor()










const weekCarousel = document.querySelector(".weekProduct-carousel")
const weekCarouselLeftArrow = document.getElementById("weekCarousel-leftArrow")
const weekCarouselrightArrow = document.getElementById("weekCarousel-rightArrow")
const weekCarouselCard = document.querySelector('.weekProduct-carouselCard').offsetWidth


const changeArrowColor = () => {
    if (weekCarousel.scrollLeft <= 0) {
        weekCarouselLeftArrow.style.background = 'white'
    }
    else {
        weekCarouselLeftArrow.style.background = "linear-gradient(to right, #44bde2, #088aed)"
    }

    if (weekCarousel.scrollLeft >= maxScrollLeft) {
        weekCarouselrightArrow.style.background = 'white'
    }
    else {
        weekCarouselrightArrow.style.background = "linear-gradient(to right, #44bde2, #088aed)"
    }
}


weekCarouselrightArrow.addEventListener("click", () => {
    weekCarousel.scrollLeft += weekCarouselCard
    setTimeout(changeArrowColor, 100)
})
weekCarouselLeftArrow.addEventListener("click", () => {
    weekCarousel.scrollLeft += -weekCarouselCard
    setTimeout(changeArrowColor, 100)
})

changeArrowColor()











const popularCarouselLeftArrow = document.getElementById("popularCarousel-leftArrow")
const popularCarouselRightArrow = document.getElementById("popularCarousel-rightArrow")
const popularCarousel = document.querySelector(".popularCard-carousel")
const popularCardCarousel = document.querySelector(".poplularCarousel-card").offsetWidth
const maxPopularScrollLeft = popularCarousel.scrollWidth - popularCarousel.clientWidth

const modifyArrowBtn = () => {
    if (popularCarousel.scrollLeft <= 0) {
        popularCarouselLeftArrow.style.background = 'white'
    }
    else {
        popularCarouselLeftArrow.style.background = "linear-gradient(to right, #44bde2, #088aed)"
    }

    if (popularCarousel.scrollLeft >= maxPopularScrollLeft) {
        popularCarouselRightArrow.style.background = 'white'
    }
    else {
        popularCarouselRightArrow.style.background = "linear-gradient(to right, #44bde2, #088aed)"
    }
}

popularCarouselRightArrow.addEventListener("click", () => {
    popularCarousel.scrollLeft += popularCardCarousel
    setTimeout(modifyArrowBtn, 100)
})

popularCarouselLeftArrow.addEventListener("click", () => {
    popularCarousel.scrollLeft += -popularCardCarousel
    setTimeout(modifyArrowBtn, 100)
})

modifyArrowBtn()