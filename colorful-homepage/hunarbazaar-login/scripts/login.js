document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulating authentication (Replace this with backend integration)
    console.log('Email:', email);
    console.log('Password:', password);

    alert('Login Successful (Dummy Functionality). Backend needed!');
});