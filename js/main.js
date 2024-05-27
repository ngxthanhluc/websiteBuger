const searchBtn = document.querySelector("#search-btn")
const searchForm = document.querySelector(".header .search-form")
const menuBtn = document.querySelector("#menu-btn")
const navbar = document.querySelector(".header .navbar")

searchBtn.onclick = () => {
    searchBtn.classList.toggle("fa-times")
    searchForm.classList.toggle("active")

    menuBtn.classList.remove("fa-times")
    navbar.classList.remove("active")
} 

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times")
    navbar.classList.toggle("active")

    searchBtn.classList.remove("fa-times")
    searchForm.classList.remove("active")
} 

window.onscroll = () => {
    searchBtn.classList.remove("fa-times")
    searchForm.classList.remove("active")
    menuBtn.classList.remove("fa-times")
    navbar.classList.remove("active")
}