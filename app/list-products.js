import './list-products.scss';

// Importing images
import product1 from "./assets/images/1.jpg";
import product2 from "./assets/images/2.jpg";
import product3 from "./assets/images/3.jpg";
import product4 from "./assets/images/4.jpg";
import product5 from "./assets/images/5.jpg";
import product6 from "./assets/images/6.jpg";
import product7 from "./assets/images/7.jpg";
import product8 from "./assets/images/8.jpg";
import product9 from "./assets/images/9.jpg";
import product10 from "./assets/images/10.jpg";
import product11 from "./assets/images/11.jpg";
import product12 from "./assets/images/12.jpg";

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById('products-container');

    const products = [
        { name: 'Product 1', description: 'Short description 1', price: '$20', image: product1 },
        { name: 'Product 2', description: 'Short description 2', price: '$30', image: product2 },
        { name: 'Product 3', description: 'Short description 3', price: '$40', image: product3 },
        { name: 'Product 4', description: 'Short description 4', price: '$50', image: product4 },
        { name: 'Product 5', description: 'Short description 5', price: '$60', image: product5 },
        { name: 'Product 6', description: 'Short description 6', price: '$70', image: product6 },
        { name: 'Product 7', description: 'Short description 7', price: '$80', image: product7 },
        { name: 'Product 8', description: 'Short description 8', price: '$90', image: product8 },
        { name: 'Product 9', description: 'Short description 9', price: '$100', image: product9 },
        { name: 'Product 10', description: 'Short description 10', price: '$110', image: product10 },
        { name: 'Product 11', description: 'Short description 11', price: '$120', image: product11 },
        { name: 'Product 12', description: 'Short description 12', price: '$130', image: product12 },
    ];

    products.forEach(product => {
        productsContainer.innerHTML += `
            <div class="col-md-4">
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="card-body">
                        <h4 class="card-title">${product.name}</h4>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>${product.price}</strong></p>
                        <button class="btn btn-success">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    });
});
