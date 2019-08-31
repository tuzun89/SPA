var slides = document.querySelectorAll('#images .img');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'img';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'current image';
}