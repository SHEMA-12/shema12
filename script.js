// ===== VIDEO ARRAY (5 videos) =====
const videos = [
  'videos/video1.mp4',
  'videos/video2.mp4',
  'videos/video3.mp4',
  'videos/video4.mp4',
  'videos/video5.mp4'
];

let currentVideoIndex = 0;

// ===== CREATE SIDE NUMBERS =====
function createSideNumbers() {
  const leftNumbers = document.getElementById('left-numbers');
  const rightNumbers = document.getElementById('right-numbers');

  // Left side numbers (0 to 100)
  for (let i = 0; i <= 100; i += 10) {
    const numDiv = document.createElement('div');
    numDiv.className = 'number-item';
    numDiv.textContent = i;
    leftNumbers.appendChild(numDiv);
  }

  // Right side numbers (100 to 0)
  for (let i = 100; i >= 0; i -= 10) {
    const numDiv = document.createElement('div');
    numDiv.className = 'number-item';
    numDiv.textContent = i;
    rightNumbers.appendChild(numDiv);
  }
}

// ===== SPLIT BRAND NAME ANIMATION =====
function splitBrandName() {
  const brandName = document.getElementById('brand-name');
  const text = brandName.textContent; // "SHEMA VERAN"
  
  // Split the text in half
  const midpoint = Math.ceil(text.length / 2);
  const leftHalf = text.substring(0, midpoint);
  const rightHalf = text.substring(midpoint);

  // Clear the original text
  brandName.textContent = '';

  // Create left half
  const leftSpan = document.createElement('span');
  leftSpan.textContent = leftHalf;
  leftSpan.className = 'split-left';
  leftSpan.style.display = 'inline-block';
  brandName.appendChild(leftSpan);

  // Create right half
  const rightSpan = document.createElement('span');
  rightSpan.textContent = rightHalf;
  rightSpan.className = 'split-right';
  rightSpan.style.display = 'inline-block';
  brandName.appendChild(rightSpan);

  // Start split animation after 2.5 seconds (when brand appears)
  setTimeout(() => {
    leftSpan.style.animation = 'splitLeft 1s ease-in-out forwards';
    rightSpan.style.animation = 'splitRight 1s ease-in-out forwards';
    
    // After split, move brand name to top left
    setTimeout(() => {
      const brandContainer = document.getElementById('brand-container');
      brandContainer.classList.add('split-active');
    }, 1000);
  }, 500);
}

// ===== VIDEO SWITCHING =====
function changeVideo(direction) {
  const mainVideo = document.getElementById('main-video');
  
  if (direction === 'next') {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  } else if (direction === 'prev') {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
  }

  // Change video source
  mainVideo.src = videos[currentVideoIndex];
  mainVideo.play();
}

// ===== VIDEO BUTTON CONTROLS =====
function setupVideoControls() {
  const prevBtn = document.getElementById('prev-video');
  const nextBtn = document.getElementById('next-video');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => changeVideo('prev'));
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => changeVideo('next'));
  }
}

// ===== RUN EVERYTHING WHEN PAGE LOADS =====
document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded! Starting animations...');
  
  // Create side numbers
  createSideNumbers();
  
  // Split brand name after it appears (at 2 seconds)
  setTimeout(() => {
    splitBrandName();
  }, 2000);
  
  // Setup video controls
  setupVideoControls();
  
  console.log('All animations initialized!');
});