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

