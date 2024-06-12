
document.addEventListener('DOMContentLoaded', () => {
  const products = [
      {
          id: 1,
          name: 'Product 1',
          price: 29.99,
          image: "images/car1.jpg"
      },
      {
          id: 2,
          name: 'Product 2',
          price: 39.99,
          image: 'images/plane1.jpg'
      },
      {
          id: 3,
          name: 'Product 3',
          price: 49.99,
          image: 'images/train2.jpg'
      },
      {
          id: 4,
          name: 'Product 4',
          price: 39.99,
          image: 'images/boat2.jpg'
      },
      {
        id: 5,
        name: 'Product 5',
        price: 29.99,
        image: 'images/block2.jpg'
    },
    {
        id: 6,
        name: 'Product 6',
        price: 19.99,
        image: 'https://via.placeholder.com/150'
    },
  ];

  const productCarousel = document.getElementById('product-carousel');

  products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';

      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;

      productCarousel.appendChild(productCard);
  });
});

function addToCart(productId) {
  console.log(`Product ${productId} added to cart!`);
  alert(`Product ${productId} added to cart!`);
}

let currentPosition = 0;

function moveCarousel(direction) {
  const carousel = document.getElementById('product-carousel');
  const cardWidth = document.querySelector('.product-card').offsetWidth + 20; // card width + gap
  const visibleCards = 3;
  const totalCards = carousel.children.length;
  const maxPosition = totalCards - visibleCards;

  currentPosition += direction;

  if (currentPosition < 0) {
      currentPosition = 0;
  } else if (currentPosition > maxPosition) {
      currentPosition = maxPosition;
  }

  const newTransform = -currentPosition * cardWidth;
  carousel.style.transform = `translateX(${newTransform}px)`;
}
