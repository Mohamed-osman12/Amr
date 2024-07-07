// JavaScript functionality (optional for form submission handling)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    // You can add your own functionality here (e.g., sending data to a server)
    alert('Form submitted!'); // Example alert
});
document.addEventListener('DOMContentLoaded', function() {
    const fab = document.getElementById('whatsapp-fab');
    const homeSection = document.getElementById('home');

    window.addEventListener('scroll', function() {
        const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
        if (window.scrollY > homeSectionBottom) {
            fab.classList.add('visible');
        } else {
            fab.classList.remove('visible');
        }
    });
});
