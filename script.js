const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    hamburger.classList.toggle("open");
    hamburger.innerHTML = hamburger.classList.contains("open") ? "✖" : "☰";
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        slide.style.display = "none";
    });
    slides[index].classList.add("active");
    slides[index].style.display = "block";
}

window.nextSlide = function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
};

window.prevSlide = function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
};

showSlide(currentSlide);

setInterval(() => {
    window.nextSlide();
}, 4000);


function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    
    if (nombre && email) {
            document.getElementById('mensaje') .innerText = "Formulario enviado correctamente";
            return false;
            }
        return true;
}   