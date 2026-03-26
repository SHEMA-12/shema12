// ===== IMAGE SLIDER FUNCTIONALITY =====

// Get all images with class 'story-image'
const images = document.querySelectorAll('.story-image');

// Get the next and previous buttons
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// Track which image is currently visible (starts at 0 = first image)
let currentImageIndex = 0;

// ===== NEXT IMAGE FUNCTION =====
function nextImage() {
    // Remove 'active' class from current image (makes it invisible)
    images[currentImageIndex].classList.remove('active');
    
    // Move to next image
    // If at last image, go back to first image (loop around)
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    // Add 'active' class to new image (makes it visible)
    images[currentImageIndex].classList.add('active');
}

// ===== PREVIOUS IMAGE FUNCTION =====
function prevImage() {
    // Remove 'active' class from current image (makes it invisible)
    images[currentImageIndex].classList.remove('active');
    
    // Move to previous image
    // If at first image, go to last image (loop around)
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    
    // Add 'active' class to new image (makes it visible)
    images[currentImageIndex].classList.add('active');
}

// ===== EVENT LISTENERS =====
// When user clicks next button (❯), run nextImage function
nextBtn.addEventListener('click', nextImage);

// When user clicks previous button (❮), run prevImage function
prevBtn.addEventListener('click', prevImage);

// ===== KEYBOARD NAVIGATION (BONUS) =====
// Allow users to navigate with arrow keys
document.addEventListener('keydown', function(event) {
    // If user presses right arrow key
    if (event.key === 'ArrowRight') {
        nextImage();
    }
    // If user presses left arrow key
    if (event.key === 'ArrowLeft') {
        prevImage();
    }
});

// ===== AUTO-PLAY SLIDER (OPTIONAL) =====
// Uncomment the code below to make images change automatically every 5 seconds

/*
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(nextImage, 5000); // Change image every 5 seconds
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Start auto-play when page loads
startAutoPlay();

// Stop auto-play when user clicks a button
nextBtn.addEventListener('click', function() {
    stopAutoPlay();
    startAutoPlay(); // Restart timer
});

prevBtn.addEventListener('click', function() {
    stopAutoPlay();
    startAutoPlay(); // Restart timer
});
*/