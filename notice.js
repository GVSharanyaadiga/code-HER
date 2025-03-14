// Open and Close Login Modal
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Login Validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Dummy credentials (Replace with backend logic)
    if (username === "admin" && password === "password123") {
        alert("Login Successful!");
        closeLoginModal();
    } else {
        errorMessage.textContent = "Invalid username or password!";
        errorMessage.style.color = "red";
    }
});
