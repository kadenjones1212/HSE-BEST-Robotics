const slideshow = document.querySelector('.slideshow');
let slideIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slideshow.parentElement.clientWidth;
  slideIndex += direction;

  // Loop back to the start/end when out of bounds
  if (slideIndex < 0) slideIndex = slides.length - 1;
  if (slideIndex >= slides.length) slideIndex = 0;

  // Move the slideshow to the selected slide
  slideshow.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
}
