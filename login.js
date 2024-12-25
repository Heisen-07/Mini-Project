document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const loginBtn = document.getElementById('loginBtn');
    const loadingSpinner = document.getElementById('loadingSpinner');

    // Real-time validation
    usernameField.addEventListener('input', () => {
        if (usernameField.value.trim() === '') {
            usernameError.textContent = 'Username is required!';
        } else {
            usernameError.textContent = '';
        }
    });

    passwordField.addEventListener('input', () => {
        if (passwordField.value.trim() === '') {
            passwordError.textContent = 'Password is required!';
        } else {
            passwordError.textContent = '';
        }
    });

    // Handle form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
        
        // Validate form
        if (usernameField.value.trim() === '') {
            usernameError.textContent = 'Username is required!';
        }

        if (passwordField.value.trim() === '') {
            passwordError.textContent = 'Password is required!';
        }

        // If both fields are filled, proceed with login (simulated)
        if (usernameField.value.trim() !== '' && passwordField.value.trim() !== '') {
            // Show loading spinner
            loginBtn.disabled = true;  // Disable the button while loading
            loadingSpinner.style.display = 'inline-block';

            setTimeout(() => {
                // Simulate a successful login and redirect to the homepage
                alert('Login successful!');
                window.location.href = 'trippt.html'; // Redirect to homepage
            }, 2000); // Simulate a 2-second loading time
        }
    });
});
