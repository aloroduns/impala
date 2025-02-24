const apiUrl = 'http://localhost:3000/api';

async function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    await fetch(`${apiUrl}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'applciation/json'},
        body:JSON.stringify({username, password})
    });
    alert('Signup successful! Please log in.');
    
}

async function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const res = await fetch(`${apiUrl}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'applciation/json'},
        body:JSON.stringify({username, password})
    });
    const data = await res.json();
    localStorage.setItem('token', data.token);
    alert('Login successful!');
}

async function getProducts() {
    const token = localStorage.getItem('token');
    const res = await fetch(`${apiurl}/fashion-products`, {
        method: 'GET',
        headers: { 'Authorization': token}
    });
    const data = await res.json();
    alert('Fashion Products: ' + data.products.join(', '));
    
}