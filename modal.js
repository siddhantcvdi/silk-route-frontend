function renderModal(product){
    let modalHTML = `
        <div class="modal-blur" >
        <div class="modal">
            <div class="image-section">
                <img src="${product.img}" alt="">
            </div>
            <div class="detail-section">
                <div class="product-details">
                    <div class="product-name-modal">${product.name}</div>
                    <div class="product-price-modal">
                        <div class="price-final-modal">${Math.trunc(product.price - ((product.disc/100)*product.price))}</div>
                        <div class="price-initial-modal">${product.price}</div>
                    </div>
                    <div class="product-desc">
                        <div class="heading">Product Description</div>
                        <div class="desc">${product.description}</div>
                    </div>
                </div>
                <!-- <div class="write-review"><input type="text"></div> -->
                <div class="reviews">
                    <div class="heading">Reviews</div>
                    <div class="review">
                        <div class="review-heading">Heading</div>
                        <div class="review-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis excepturi dignissimos perferendis, ab debitis esse neque molestias inventore distinctio iusto.</div>
                    </div>
                    <div class="review">
                        <div class="review-heading">Heading</div>
                        <div class="review-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis excepturi dignissimos perferendis, ab debitis esse neque molestias inventore distinctio iusto.</div>
                    </div>
                    <div class="review">
                        <div class="review-heading">Heading</div>
                        <div class="review-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis excepturi dignissimos perferendis, ab debitis esse neque molestias inventore distinctio iusto.</div>
                    </div>
                </div>
                <button class="bag-modal" id = "${product._id}">Add to Bag</button>
            </div>
        </div>
    </div>
    `
    document.querySelector('body').insertAdjacentHTML('beforeend', modalHTML)
    
}

function showModal(id){
    fetch(`http://localhost:3000/api/products/${id}`)
    .then(response => response.json())
    .then(product => {
        renderModal(product)
    })
    .catch(error => console.error('Error fetching product by ID:', error))
}

export { showModal }
        // fetch('http://localhost:3000/api/auth/isloggedin', {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': `Bearer ${localStorage.getItem('token')}`
        //     }
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data.loggedIn) {
        //         } else {
        //             alert('Please login to add items to cart');
        //             window.location.href = '../Login/index.html';
        //         }
        //     });
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