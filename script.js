// Declare variables at the top level
let slideIndex = 0;

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

function showImage(imageIndex) {
    slideIndex = imageIndex;
    const modalImage = document.getElementById('modalImage');
    const clickedImage = document.querySelectorAll('.carousel-item img')[imageIndex];

    modalImage.src = clickedImage.src;

    // Set the image size to make it smaller
    modalImage.style.width = '50%'; // Adjust the size as needed
    modalImage.style.height = 'auto';

    document.getElementById('imageModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}



$(document).ready(function() {
    $('.carousel-container .carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
