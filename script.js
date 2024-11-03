let slideIndex = 1;
let slides = [];

// Fetch images from the JSON file
fetch('images.json')
    .then(response => response.json())
    .then(data => {
        slides = data.images.map((src, index) => { // Access the 'images' key
            // Create the slide element
            const slideDiv = document.createElement('div');
            slideDiv.className = 'mySlides';
            slideDiv.innerHTML = `
                <div class="numbertext">${index + 1} / ${data.images.length}</div>
                <img src="${src}" style="height: 400px">
                <div class="text"></div>
            `;
            document.getElementById('slideshowContainer').insertBefore(slideDiv, document.querySelector('.prev'));
            return slideDiv;
        });

        showSlides(slideIndex); // Initialize the first slide
    })
    .catch(error => console.error('Error fetching images:', error));

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show the current slide
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
}

////////////////////HEADER AND FOOTER JS///////////////////////////
fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
})
.catch(error => console.error('Error loading footer:', error));

fetch('header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
})
.catch(error => console.error('Error loading header:', error));