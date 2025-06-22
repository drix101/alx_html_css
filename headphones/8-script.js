document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('header nav ul');

    hamburger.addEventListener('click', function() {
        // Toggle active class on hamburger icon
        this.classList.toggle('active');
        // Toggle active class on navigation menu
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});