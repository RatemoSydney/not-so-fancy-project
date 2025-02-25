// Banner image preloader and cycler
let bannerImages = [];
let currentBannerIndex = 0;
const bannerPaths = ['images/banner1.jpg', 'images/banner2.jpg', 'images/banner3.jpg'];

// Preload function for banner images
function preloadBannerImages() {
    for (let path of bannerPaths) {
        const img = new Image();
        img.src = path;
        bannerImages.push(img);
    }
}

// Banner cycling function
function cycleBanner() {
    const imgElements = document.querySelectorAll('#bannerImages img');
    imgElements[currentBannerIndex].style.opacity = '0';
    
    currentBannerIndex = (currentBannerIndex + 1) % imgElements.length;
    imgElements[currentBannerIndex].style.opacity = '1';
}

// Page load initialization
function onPageLoad() {
    preloadBannerImages();
    setInterval(cycleBanner, 3000); // Cycle every 3 seconds
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', onPageLoad);