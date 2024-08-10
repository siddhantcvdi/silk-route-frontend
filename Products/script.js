"use strict"

const modal_blur = document.querySelector('.modal-blur');
const modal = document.querySelector('.modal')
const product_cards = document.querySelectorAll('.product-card');

product_cards.forEach((product_card)=>{
    product_card.addEventListener('click',()=>{
        modal_blur.classList.remove('hide');
    })
})

document.querySelector('.product-button').addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('Button');
    
})


document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal-blur'))
        modal_blur.classList.add('hide')
})
