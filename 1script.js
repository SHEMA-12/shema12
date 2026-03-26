// Get all the images in the slider
const images = document.querySelectorAll('.story-image');

// Get the next and previous buttons
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// Keep track of which image is currently showing
let currentImageIndex = 0;

// Function to show a specific image
function showImage(index) {
    // Remove 'active' class from all images
    images.forEach(img => img.classList.remove('active'));
    
    // Add 'active' class to the current image
    images[index].classList.add('active');
}

// Function to go to the next image
function nextImage() {
    currentImageIndex++;
    
    // If we reach the end, go back to the first image
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    
    showImage(currentImageIndex);
}

// Function to go to the previous image
function prevImage() {
    currentImageIndex--;
    
    // If we go before the first image, go to the last image
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    
    showImage(currentImageIndex);
}

// Add click event listeners to the buttons
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);