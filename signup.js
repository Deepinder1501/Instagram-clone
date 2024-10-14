// document.getElementById('signup-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const email = document.getElementById('email').value.trim();
//     const fullName = document.getElementById('full-name').value.trim();
//     const username = document.getElementById('username').value.trim();
//     const password = document.getElementById('password').value;

//     if (!email || !fullName || !username || !password) {
//         alert('Please fill in all fields.');
//         return;
//     }
    
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//         alert('Please enter a valid email address.');
//         return;
//     }
    
//     if (password.length < 6) {
//         alert('Password must be at least 6 characters.');
//         return;
//     }

//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);

//     alert('Signup successful! Welcome to Instagram.');
//     window.location.href = 'login.html'; 
// });
// signup.js
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    if (this.checkValidity()) {
        const email = document.getElementById("email").value;
        const fullname = document.getElementById("fullname").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        localStorage.setItem("email", email);
        localStorage.setItem("fullname", fullname);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        window.location.href = "login.html";
    } else {
        this.reportValidity();
    }
});
