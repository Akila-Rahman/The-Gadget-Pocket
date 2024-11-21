// Carousel Functionality
const carouselImages = document.querySelector('.carousel-images');
let index = 0;

setInterval(() => {
    index = (index + 1) % 5; // Loop through images
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
}, 3000);

// Price Filter
const priceFilter = document.getElementById('price-filter');
const productGrid = document.querySelector('.product-grid');
const products = Array.from(document.querySelectorAll('.product-card'));

priceFilter.addEventListener('change', () => {
    const sortedProducts = products.sort((a, b) => {
        const priceA = parseInt(a.querySelector('p').textContent.replace('$', ''));
        const priceB = parseInt(b.querySelector('p').textContent.replace('$', ''));
        return priceFilter.value === 'low-to-high' ? priceA - priceB : priceB - priceA;
    });

    productGrid.innerHTML = '';
    sortedProducts.forEach(product => productGrid.appendChild(product));
});
