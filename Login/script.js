"use strict"
const inputHTML= '<input type="text" class="input-field name-field" placeholder="Name">'
const btn = document.querySelector('#btnLoginReg')
const changeMode = document.querySelector('.change-mode');
let currentMode = 'login';

changeMode.addEventListener('click', () => {
    if(currentMode === 'login'){
        currentMode = 'register';
        changeMode.textContent = 'Already have an account?';
        btn.textContent = 'Login';
        document.querySelector('.input-container').insertAdjacentHTML('afterbegin', inputHTML);
    }
    else{
        currentMode = 'login';
        changeMode.textContent = 'Create a new account?';
        btn.textContent = 'Register';
        document.querySelector('.name-field').remove();
    }
    console.log(currentMode);
    
})