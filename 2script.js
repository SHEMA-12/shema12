// Get all the images
const images = document.querySelectorAll('.story-image');

// Get the buttons
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// Track current image
let currentImageIndex = 0;

// When you click next button
nextBtn.addEventListener('click', nextImage);

// When you click previous button
prevBtn.addEventListener('click', prevImage);