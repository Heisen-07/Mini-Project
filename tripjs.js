// Smooth Scrolling for Navigation Links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        
        const targetId = this.getAttribute('href').substring(1); // Get the target section id
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust to scroll a bit above the target
                behavior: 'smooth' // Smooth scrolling
            });
        }
    });
});

// Sticky Header Effect
const header = document.querySelector('header');
const sticky = header.offsetTop;

window.addEventListener('scroll', function () {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Form Validation for the 'Plans' Section
const form = document.querySelector('#plans form');
const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const submitButton = form.querySelector('button');

form.addEventListener('submit', function (e) {
    let valid = true;
    
    // Reset previous error messages
    const errorMessages = form.querySelectorAll('.error');
    errorMessages.forEach(msg => msg.remove());

    // Validate Name
    if (nameInput.value.trim() === '') {
        valid = false;
        showError(nameInput, 'Name is required');
    }

    // Validate Email
    if (!validateEmail(emailInput.value)) {
        valid = false;
        showError(emailInput, 'Please enter a valid email');
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
        valid = false;
        showError(messageInput, 'Message cannot be empty');
    }

    if (!valid) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});

// Function to validate email format
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// Function to show error message
function showError(inputElement, message) {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error');
    errorMessage.style.color = 'red';
    errorMessage.style.fontSize = '0.9rem';
    errorMessage.textContent = message;
    inputElement.insertAdjacentElement('afterend', errorMessage);
}

// Button Hover Effects - Dynamic Font Size
const hoverButtons = document.querySelectorAll('.hero button, .interest-card button, #plans form button');
hoverButtons.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.fontSize = '1.1rem'; // Increase font size on hover
    });

    button.addEventListener('mouseout', function() {
        this.style.fontSize = ''; // Reset font size after hover
    });
});

// Activate Scroll-to-Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/Hide Scroll-to-Top Button
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll Reveal Effect for Destination Cards
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', function () {
    cards.forEach(card => {
        if (card.getBoundingClientRect().top < window.innerHeight * 0.8) {
            card.classList.add('reveal'); // Add class to reveal the card
        }
    });
});
