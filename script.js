var slides = document.querySelectorAll('#images .image');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'image';
    currentSlide = (currentSlide+1)%image.length;
    slides[currentSlide].className = 'current image';
}