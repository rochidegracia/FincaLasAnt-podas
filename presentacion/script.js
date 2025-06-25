const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});

document.getElementById('prev').addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});
