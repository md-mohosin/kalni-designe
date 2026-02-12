const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById("sidebar")



menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active")
    sidebar.classList.toggle("active")
})

