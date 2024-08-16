"use strict"
const inputHTML= '<input type="text" class="input-field name-field" id = "name" placeholder="Name">'
const btn = document.querySelector('#btnLoginReg')
const changeMode = document.querySelector('.change-mode');
let currentMode = 'login';

fetch('http://localhost:3000/api/auth/isloggedin', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})
.then(response => response.json())
.then(data => {
    if (data.loggedIn) {
        btn.textContent = 'Logged In';
        btn.disabled = true;
        changeMode.disabled = true;
    } else {
        btn.textContent = 'Login';
        changeMode.addEventListener('click', () => {
            if(currentMode === 'login'){
                currentMode = 'register';
                changeMode.textContent = 'Already have an account?';
                btn.textContent = 'Register';
                document.querySelector('.input-container').insertAdjacentHTML('afterbegin', inputHTML);
            }
            else{
                currentMode = 'login';
                changeMode.textContent = 'Create a new account?';
                btn.textContent = 'Login';
                document.querySelector('.name-field').remove();
            }
            console.log(currentMode);
            
        })
    }
});

btn.addEventListener('click', () => {
    if(currentMode === 'register')
    {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('pass').value;
    
        fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                alert('Registration successful');
                btn.textContent = 'Logged In';
                btn.disabled = true;
                window.location.href = '../Products/index.html';
            } else {
                alert('Registration failed: ' + data.error);
            }
        });
    }
    else{
        const email = document.getElementById('email').value;
        const password = document.getElementById('pass').value;

        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                alert('Login successful');
                btn.textContent = 'Logged In';
                btn.disabled = true;
                window.location.href = '../Products/index.html';
            } else {
                alert('Login failed: ' + data.error);
            }
        });
    }
});

