const slideshow = document.querySelector('.slideshow');
let slideIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].clientWidth;
  slideIndex += direction;
  
  // Ensure slideIndex stays within bounds
  if (slideIndex < 0) slideIndex = slides.length - 1;
  if (slideIndex >= slides.length) slideIndex = 0;

  // Move the slideshow to the selected slide
  slideshow.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
}
