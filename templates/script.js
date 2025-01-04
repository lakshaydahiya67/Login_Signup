document.addEventListener("DOMContentLoaded", function () {
    // Login Form Validation
    const loginForm = document.querySelector(".login-box form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "" || password === "") {
                alert("Please fill in all fields.");
                event.preventDefault();
            } else {
                alert("Login successful!"); // Replace with actual login logic
            }
        });
    }

    // Sign-Up Form Validation
    const signUpForm = document.querySelector(".signup-box form");
    if (signUpForm) {
        signUpForm.addEventListener("submit", function (event) {
            const fullName = document.getElementById("fullname").value.trim();
            const email = document.getElementById("email").value.trim();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (fullName === "" || email === "" || username === "" || password === "") {
                alert("All fields are required.");
                event.preventDefault();
            } else if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                event.preventDefault();
            } else {
                alert("Sign-up successful!"); // Replace with actual sign-up logic
            }
        });
    }

    // Email Validation Function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
