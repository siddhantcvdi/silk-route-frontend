"use strict"
let state = 'all';
import { showModal } from '../modal.js';
const cartButton = document.querySelector('.bag-modal');






/////////////////////////// Code to add items to cart of the userrrrr //////////////////////////////


const addToCart = async (productID) => {
    try {
        const response = await fetch('http://localhost:3000/api/auth/add-to-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ productID })
        });
        const data = await response.json();
        if (response.ok) {
            alert('Item added to cart successfully')
            console.log('Updated cart:', data.cart);
        } else {
            if (response.status === 401 || response.status === 403) {
                alert('Session expired or invalid. Please log in again.');
                window.location.href = '../Login/index.html';
            } else {
                console.error('Error:', data.error || 'Failed to add item to cart.');
            }
        }
    } catch (error) {
        console.error('Error adding item to cart:', error);
        alert('An error occurred. Please try again.');
    }
};

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('bag-modal')) {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('You need to log in first!');
            window.location.href = '../Login/index.html';
        }
        else
            addToCart(e.target.id);
    }
});





///////////////////////////  Code to render products according to the state selected     ///////////////////////////////

const renderProducts = function (data) {
    for (let element of data) {
        const card = `
            <div class="card-container">
                <div class="product-card" >
                    <img src="${element.img}" alt="">
                    <div class="gradient"></div>
                    <div class="product-desc">
                        <div class="product-name">${element.name}</div>
                    </div>
                    
                    <div class="button-container">
                        <div class="product-price">
                            <div class="final-price">₹${Math.trunc(element.price - ((element.disc / 100) * element.price))}</div>
                            <div class="initial-price">₹${element.price}</div>
                        </div>
                        <button class="product-button" id = "${element._id}" >View More</button>
                    </div>
                </div>
            </div>`;
        document
            .querySelector(".products-grid")
            .insertAdjacentHTML("afterbegin", card);
    }

};

const fetchProducts = async function (state) {
    fetch(`http://localhost:3000/api/products/state/${state}`)
        .then(response => response.json())
        .then(products => {
            console.log('Products in state:', state);
            renderProducts(products);
        })
        .catch(error => console.error('Error fetching products by state:', error));
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('product-button')) {
        e.stopPropagation();
        // modal_blur.classList.remove('hide');
        showModal(e.target.id);
    }
});

fetchProducts('all');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-blur'))
        e.target.remove()
})
