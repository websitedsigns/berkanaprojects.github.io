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

const carouselContainer = document.querySelector('.carousel-container');
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 1;
const slideWidth = images[0].clientWidth;

function slide() {
    if (counter >= images.length) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

function resetSlide() {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

// Set an interval for automatic sliding (you can adjust the interval)
setInterval(slide, 4000); // Change image every 4 seconds

