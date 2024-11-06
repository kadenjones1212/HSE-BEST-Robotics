// Object to track the index of each slideshow
let slideIndices = {};

// Initialize all slideshows
document.querySelectorAll(".slideshow-container").forEach((container, index) => {
    slideIndices[index] = 1; // Initialize each slideshow's index to 1
    showSlides(index, 1); // Display the first slide for each slideshow

    // Attach plusSlides function to the container’s buttons
    container.querySelector(".prev").onclick = () => plusSlides(index, -1);
    container.querySelector(".next").onclick = () => plusSlides(index, 1);
});

// Function to update slideshow based on current index and slide shift (n)
function plusSlides(slideshowIndex, n) {
    showSlides(slideshowIndex, (slideIndices[slideshowIndex] += n));
}

// Function to display the current slide for the specific slideshow
function showSlides(slideshowIndex, n) {
    const container = document.querySelectorAll(".slideshow-container")[slideshowIndex];
    const slides = container.getElementsByClassName("mySlides");
    
    // Check bounds and update slide index
    if (n > slides.length) slideIndices[slideshowIndex] = 1;
    if (n < 1) slideIndices[slideshowIndex] = slides.length;

    // Hide all slides within this container
    Array.from(slides).forEach(slide => (slide.style.display = "none"));

    // Display the current slide
    slides[slideIndices[slideshowIndex] - 1].style.display = "block";

    // Update the slide number text if it exists
    const numberText = slides[slideIndices[slideshowIndex] - 1].querySelector(".numbertext");
    if (numberText) {
        numberText.textContent = `${slideIndices[slideshowIndex]} / ${slides.length}`;
    }
}
