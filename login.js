// login.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (usernameInput === savedUsername && passwordInput === savedPassword) {
        alert("Login successful!");
        window.location.href = "index.html"; 
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
