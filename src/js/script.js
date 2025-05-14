// Burger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle menu on burger click
    burger.addEventListener('click', function() {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
});