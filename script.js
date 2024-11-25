let currentIndex = 0;
const images = document.querySelectorAll('.slider-images');

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';  // Show the current image
        } else {
            image.style.display = 'none';   // Hide other images
        }
    });
}

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;  // Loop back to the first image when reaching the end
    showImage(currentIndex);
}

// Set the interval to change the image every 3 seconds
setInterval(nextImage, 3000);

// Display the first image initially
showImage(currentIndex);
