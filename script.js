// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// CLOSE MENU AFTER CLICK

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// SCROLL ANIMATION

window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 200;
        const height = section.offsetHeight;

        if(top >= offset && top < offset + height){
            section.classList.add("show");
        }

    });

});