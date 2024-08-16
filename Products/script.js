"use strict"
let state = 'all';
const modal_blur = document.querySelector('.modal-blur');
const modal = document.querySelector('.modal')
const cartButton = document.querySelector('.bag-modal');
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-blur'))
        modal_blur.classList.add('hide')
})

cartButton?.addEventListener('click', (e) => {
    // fetch('http://localhost:3000/api/auth/me', {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': `Bearer ${localStorage.getItem('token')}`
    //     }
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data.error) {
    //             alert('Failed to fetch user details: ' + data.error);
    //         } else {
                
    //         }
    //     })
    fetch('http://localhost:3000/api/auth/isloggedin', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.loggedIn) {
            
        } else {
            alert('Please login to add items to cart');
            window.location.href = '../Login/index.html';
        }
    });
});

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
                            <div class="final-price">₹${element.price}</div>
                            <div class="initial-price">₹1200</div>
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

const fetchProducts  = async function (state) {
    fetch(`http://localhost:3000/api/products/state/${state}`)
    .then(response => response.json())
    .then(products => {
        console.log('Products in state:', state);
        renderProducts(products);
    })
    .catch(error => console.error('Error fetching products by state:', error));
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('product-button')) {
        e.stopPropagation();
        modal_blur.classList.remove('hide');
    }
});

fetchProducts('all');

