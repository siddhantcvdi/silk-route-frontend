"use strict";
let description_text;
let reviews;
const modal_blur = document.querySelector(".modal-blur");
const modal = document.querySelector(".modal");

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-blur"))
        modal_blur.classList.add("hide");
});

const createCards = function (data) {
    for (let element of data) {
        const card = `
            <div class="card-container">
                <div class="product-card" id = "${element._id}">
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
                        <button class="product-button">Add to Bag</button>
                    </div>
                </div>
            </div>`;
        document
            .querySelector(".products-grid")
            .insertAdjacentHTML("afterbegin", card);
    }
    const product_cards = document.querySelectorAll(".product-card");
    product_cards.forEach((product_card) => {
        product_card.addEventListener("click", () => {
            modal_blur.classList.remove("hide");
        });
    });
    document.querySelector('.product-button').addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Button');
    })
};

async function getProducts(state_name) {
    const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            state: state_name,
        }),
    });
    createCards(await response.json());
}
getProducts("Maharashtra");
