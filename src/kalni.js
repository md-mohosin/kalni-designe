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