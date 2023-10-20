const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = `image${index + 1}.jpg`;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
