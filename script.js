let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to show the current slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  // Update slideIndex based on bounds
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Show the current slide
  slides[slideIndex - 1].style.display = "block";
  
  // Update the number text to reflect current slide
  const numberText = slides[slideIndex - 1].getElementsByClassName("numbertext")[0];
  numberText.textContent = slideIndex + " / " + slides.length;
}

// Initialize the first slide number display
showSlides(slideIndex);
