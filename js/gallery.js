// Image paths for gallery
const galleryImages = [
    'images/firefighter.jpg',
    'images/work.jpg',
    'images/silhouette.jpg',
    'images/event.jpg'
];

// Preload gallery images
function preloadGalleryImages() {
    galleryImages.forEach(imagePath => {
        const img = new Image();
        img.src = imagePath;
    });
}

// Rollover effect handler
function setupRolloverEffects() {
    const images = document.querySelectorAll('.gallery img');
    
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.opacity = '0.7'; // Change opacity on hover
        });
        img.addEventListener('mouseout', () => {
            img.style.opacity = '1'; // Reset opacity when not hovered
        });
    });
}

// Page load initialization
function onPageLoad() {
    preloadGalleryImages();
    setupRolloverEffects(); // Set up rollover effects
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', onPageLoad);