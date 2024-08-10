"use strict"
const inputHTML= '<input type="text" class="input-field name-field" placeholder="Name">'
const newAcc = document.querySelector('.new-acc')
const backToLogin = document.querySelector('.back-login')

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('new-acc')){
        document.querySelector('.input-container').insertAdjacentHTML('afterbegin',inputHTML)
        document.querySelector('#btnLogin')?.remove();
        document.querySelector('.input-container').insertAdjacentHTML('afterend','<button id="btnRegister">Register</button>')
        newAcc.textContent = "Back to Login"
        newAcc.classList.remove('new-acc')
        newAcc.classList.add('back-login')
    }
    else if(e.target.classList.contains('back-login')){
        document.querySelector('.name-field').remove();
        document.querySelector('#btnRegister')?.remove();
        document.querySelector('.input-container').insertAdjacentHTML('afterend','<button id="btnLogin">Login</button>')
        newAcc.textContent = "Create a new Account"
        newAcc.classList.remove('back-login')
        newAcc.classList.add('new-acc')
    }
})
console.log('Hi');
