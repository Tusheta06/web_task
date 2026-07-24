const products = [
    {
        id: 1,
        name: "Fresh Cream Pineapple Cake",
        priceRange: "₹675 – ₹1300",
        image: "images/pineapple_cake.webp",
        badge: "Bestseller",
        eggless: true
    },
    {
        id: 2,
        name: "Chocoholic Cake",
        priceRange: "₹750",
        image: "images/chocoholic_cake.webp",
        badge: "Signature",
        eggless: false
    },
    {
        id: 3,
        name: "Hazelnut Praline Mousse Cake",
        priceRange: "₹875",
        image: "images/hazelnut_cake.webp",
        badge: "",
        eggless: false
    },
    {
        id: 4,
        name: "New York Style Baked Cheesecake",
        priceRange: "₹725",
        image: "images/cheesecake.webp",
        badge: "Must Try",
        eggless: false
    },
    {
        id: 5,
        name: "Dutch Truffle Cake",
        priceRange: "₹650 – ₹1300",
        image: "images/truffle_cake.webp",
        badge: "",
        eggless: true
    },
    {
        id: 6,
        name: "Red Velvet Cake",
        priceRange: "₹675",
        image: "images/red_velvet_cake.webp",
        badge: "",
        eggless: false
    },
    {
        id: 7,
        name: "Blueberry Cheesecake",
        priceRange: "₹825",
        image: "images/cheesecake.webp",
        badge: "",
        eggless: false
    },
    {
        id: 8,
        name: "Rich Chocolate Cake",
        priceRange: "₹575",
        image: "images/truffle_cake.webp",
        badge: "",
        eggless: true
    },
    {
        id: 9,
        name: "Butterscotch & Milk Chocolate Cake",
        priceRange: "₹550",
        image: "images/hazelnut_cake.webp",
        badge: "",
        eggless: true
    },
    {
        id: 10,
        name: "Black Forest Cake",
        priceRange: "₹650",
        image: "images/chocoholic_cake.webp",
        badge: "",
        eggless: false
    },
    {
        id: 11,
        name: "Theobroma Signature Brownie Cake",
        priceRange: "₹850",
        image: "images/chocoholic_cake.webp",
        badge: "Signature",
        eggless: false
    }
];

function createProductCard(product) {
    return `
        <article class="product-card">
            <div class="product-image-wrapper">
                ${product.badge ? `<div class="product-badges"><span class="badge">${product.badge}</span></div>` : ''}
                <img 
                    src="${product.image}" 
                    alt="${product.name}" 
                    class="product-image"
                    loading="lazy"
                    width="400"
                    height="400"
                    decoding="async"
                />
            </div>
            <div class="product-info">
                <h2 class="product-title">${product.name}</h2>
                <p class="product-price">${product.priceRange}</p>
                <button class="btn-order" onclick="addToCart()">
                    <span>Order Online</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
            </div>
        </article>
    `;
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = products.map(createProductCard).join('');
}

let cartCount = 0;
function addToCart() {
    cartCount++;
    const countEl = document.querySelector('.cart-count');
    countEl.textContent = cartCount;
    
    countEl.style.transform = 'scale(1.5)';
    setTimeout(() => {
        countEl.style.transform = 'scale(1)';
    }, 200);
}

document.addEventListener('DOMContentLoaded', renderProducts);
