const btnMenu = document.querySelector(".menu-btn");


btnMenu.addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
})