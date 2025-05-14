// animations.js

// Function to trigger a fade-in animation
function fadeIn(element) {
    element.style.opacity = 0;
    element.style.transition = "opacity 0.5s ease-in";
    element.style.opacity = 1;
}

// Function to trigger a slide-in animation
function slideIn(element) {
    element.style.transform = "translateX(-100%)";
    element.style.transition = "transform 0.5s ease-in-out";
    element.style.transform = "translateX(0)";
}

// Event listener for elements with the class 'animate-fade'
document.querySelectorAll('.animate-fade').forEach(element => {
    element.addEventListener('mouseenter', () => fadeIn(element));
});

// Event listener for elements with the class 'animate-slide'
document.querySelectorAll('.animate-slide').forEach(element => {
    element.addEventListener('click', () => slideIn(element));
});