document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const maxWidth = window.innerWidth;
    const maxHeight = document.documentElement.scrollHeight; // Use the full page height
    const linePosX = 50;
    const linePosY = 50;
    // Create a container for the circles
    const circleContainer = document.createElement("div");
    circleContainer.classList.add("circle-container");
    body.appendChild(circleContainer);

    // Function to create a circle with custom criteria
    function createCircle(color, xPercentage, yPercentage, size) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.backgroundColor = color;
        circle.style.width = size + "px";
        circle.style.height = size + "px";
        circle.style.position = "fixed"; // Change position to fixed
        circle.style.left = `calc(${xPercentage}% - ${size / 2}px)`;
        circle.style.top = `calc(${yPercentage}% - ${size / 2}px)`;
        circle.style.borderRadius = "50%";

        circleContainer.appendChild(circle);
    }

    createCircle("#006", 99, 0, 500);
    createCircle("whitesmoke", 100, 0, 499); 

    createCircle("whitesmoke",100,100,195);
    createCircle("#006", 0, 100, 500);
    createCircle("whitesmoke", -1, 100, 499); 


   



    // Add more custom circles as needed using the createCircle function
});