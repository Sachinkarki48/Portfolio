// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.querySelector('#name').value.trim();
    let email = document.querySelector('#email').value.trim();
    let message = document.querySelector('#message').value.trim();
    let valid = true;

    if (name === '') {
        alert('Please enter your name.');
        valid = false;
    } else if (email === '' || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        valid = false;
    } else if (message === '') {
        alert('Please enter your message.');
        valid = false;
    }

    if (valid) {
        // Submit the form (if a server is set up)
        this.submit();
    }
});

function validateEmail(email) {
    // Simple email validation
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

// Optional: Adding interactivity to skill cards
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseenter', function () {
        this.classList.add('hovered');
    });

    skill.addEventListener('mouseleave', function () {
        this.classList.remove('hovered');
    });
});
