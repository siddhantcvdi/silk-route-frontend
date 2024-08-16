"use strict"

const modal_blur = document.querySelector('.modal-blur');
const modal = document.querySelector('.modal')
const product_button = document.querySelectorAll('.product-button');

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal-blur'))
        modal_blur.classList.add('hide')
})

product_button.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        modal_blur.classList.remove('hide');
    })
})