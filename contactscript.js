// ===== IMAGE SLIDER FUNCTIONALITY (From About Page) =====

// Get all images with class 'story-image'
const images = document.querySelectorAll('.story-image');

// Get the next and previous buttons
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// Only run slider code if elements exist (for pages that have them)
if (images.length > 0 && nextBtn && prevBtn) {
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
}

// ===== FORM VALIDATION (For Feedback Form if present) =====

const feedbackForm = document.querySelector('form[action*="formspree"]');

if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(event) {
        // Get all required fields
        const requiredFields = feedbackForm.querySelectorAll('[required]');
        let isValid = true;
        
        // Check each required field
        requiredFields.forEach(field => {
            // If field is empty
            if (field.value.trim() === '') {
                isValid = false;
                // Add error styling
                field.style.borderColor = 'red';
                field.style.backgroundColor = '#ffe6e6';
            } else {
                // Remove error styling
                field.style.borderColor = '#ddd';
                field.style.backgroundColor = 'white';
            }
        });
        
        // If form is not valid, prevent submission
        if (!isValid) {
            event.preventDefault();
            alert('Please fill in all required fields!');
        }
    });
}

// ===== CONTACT INFO COPY TO CLIPBOARD =====
// Allow users to copy email with one click

const contactItems = document.querySelectorAll('.contact-item a');

contactItems.forEach(link => {
    // Add cursor pointer style
    link.style.cursor = 'pointer';
    
    // When user clicks the link
    link.addEventListener('click', function(event) {
        // If it's an email link
        if (this.href.startsWith('mailto:')) {
            // Get the email address
            const email = this.href.replace('mailto:', '');
            
            // Copy to clipboard
            navigator.clipboard.writeText(email).then(function() {
                // Show success message
                alert('Email copied to clipboard: ' + email);
            });
        }
        // If it's a phone link
        else if (this.href.startsWith('tel:')) {
            // Get the phone number
            const phone = this.href.replace('tel:', '');
            
            // Copy to clipboard
            navigator.clipboard.writeText(phone).then(function() {
                // Show success message
                alert('Phone number copied to clipboard: ' + phone);
            });
        }
    });
});

// ===== SOCIAL LINK TRACKING =====
// Track when users click social media links

const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Get the social media platform
        const platform = this.textContent.trim();
        
        // Log to console (you can send this to analytics)
        console.log('User clicked: ' + platform);
    });
});

// ===== CONSOLE MESSAGE =====
// Fun message in the console

console.log('%c🎉 Welcome to Shema\'s Portfolio!', 'font-size: 20px; color: #ffcc00; font-weight: bold;');
console.log('%cThanks for visiting! Feel free to explore and get in touch.', 'font-size: 14px; color: #333;');