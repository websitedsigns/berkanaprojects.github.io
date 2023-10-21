// Declare variables at the top level
let slideIndex = 0;
const closeButton = document.getElementById('closeButton');

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop
            });
        }
    });
});

// JavaScript for mobile menu (burger menu)
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu ul');
burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Gallery JavaScript (added functionality)
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageSrc = item.querySelector('img').src;
        modalImage.src = imageSrc;
        modal.style.display = 'block';
    });
});

// Open the modal with a specific image
function openModal(imageIndex) {
    slideIndex = imageIndex;
    document.getElementById('imageModal').style.display = 'block';
    showImage(slideIndex);
}

// Close the modal
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Show the current image
function showImage(n) {
    const images = document.querySelectorAll('.gallery-item img');
    if (n >= images.length) slideIndex = 0;
    if (n < 0) slideIndex = images.length - 1;
    document.getElementById('modalImage').src = images[slideIndex].src;
}

// Navigate to the previous or next image
function plusSlides(n) {
    showImage(slideIndex + n);
}

// Get the elements for previous and next buttons
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Add event listeners for previous and next buttons
prevButton.addEventListener('click', () => plusSlides(-1));
nextButton.addEventListener('click', () => plusSlides(1));

// Add a click event listener to the close button to hide the modal
closeButton.addEventListener('click', closeModal);

// When the user clicks anywhere outside the modal, close it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
