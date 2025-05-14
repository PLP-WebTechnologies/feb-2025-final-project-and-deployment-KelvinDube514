// Main JavaScript file for interactivity

// Function to initialize event listeners
function init() {
    const buttons = document.querySelectorAll('.interactive-button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
}

// Function to handle button clicks
function handleButtonClick(event) {
    const button = event.target;
    alert(`You clicked on ${button.textContent}`);
}

// Function to toggle a class for responsive design
function toggleResponsiveMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', init);