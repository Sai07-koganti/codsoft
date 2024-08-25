function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(email === '' || password === '') {
        alert('Please enter your email and password.');
    } else {
        alert('Login successful!');
    }
}