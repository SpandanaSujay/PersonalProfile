// script.js

// Function to toggle the navigation menu on small screens
function toggleMenu() 
{
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('active');
}

// Smooth scroll functionality for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) 
    {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to show/hide the contact form
function toggleContactForm() 
{
    const contactForm = document.querySelector('.contact-form');
    contactForm.classList.toggle('active');
}

// Event listeners
document.querySelector('.menu-btn').addEventListener('click', toggleMenu);
document.querySelector('.contact-btn').addEventListener('click', toggleContactForm);